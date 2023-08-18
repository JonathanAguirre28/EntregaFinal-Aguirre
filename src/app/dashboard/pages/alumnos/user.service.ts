import { Injectable } from '@angular/core';
import { CreateUserData, User, updateUserdata } from './models';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';

const USER_DB: Observable<User[]> = of([
  {
    id: 1,
    name: 'Jonathan',
    surname: 'Aguirre',
    email: 'jonathan@gmail.com',
    password: '123456',
  },
  {
    id: 2,
    name: 'Simon',
    surname: 'Aguirre',
    email: 'Simon@gmail.com',
    password: '123456',
  },
]).pipe(delay(1000));

@Injectable()
export class UserService {
 private _users$ = new BehaviorSubject<User[]>([]);
 private users$ = this._users$.asObservable();


  constructor( private notifier: NotifierService) {}

  loadUsers(): void {
    USER_DB.subscribe({
      next: (usuariosFromDb) => this._users$.next(usuariosFromDb),
    });
  }

  getUsers(): Observable<User[]> {
  return this.users$;
  }

  getUserById(id: number) {
    return this.users$.pipe(
      take(1),
      map(( users ) => users.find((u) => u.id === id )),
      )
  }

  createUser(user: CreateUserData): void {
  this.users$.pipe(take(1)).subscribe({
    next: (arrayActual) => {
      this._users$.next([
        ...arrayActual, 
        { ...user, id: arrayActual.length + 1 },
      ]);
      this.notifier.showSucess('Usuario Creado');
    },
   });
  }

  updateUserById(id: number, usuarioActualizado: updateUserdata): void {
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._users$.next(
          arrayActual.map((u) => u.id === id ? { ...u, ...usuarioActualizado } : u)
        );
        this.notifier.showSucess('Usuario Actualizado')
      }
    })
  }

  deleteUserById(id: number): void {
    this._users$.pipe(take(1)).subscribe({
      next: (ArrayActual) => {
      this._users$.next(ArrayActual.filter((u) => u.id !== id));
      this.notifier.showSucess('Usuario Eliminado');
       },
    });
   }
  }
