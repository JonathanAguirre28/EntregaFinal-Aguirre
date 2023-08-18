import { MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnDestroy } from '@angular/core';
import { AlumnosFormDialogComponent } from './components/alumnos-form-dialog/alumnos-form-dialog.component';
import { User } from './models';
import { UserService } from './user.service';
import { Observable, Subject } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-users2',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [NotifierService],
})
export class UsersComponent2 implements OnDestroy {
  public users: Observable<User[]>;
  public destroyed = new Subject<boolean>();
  public loaging = false;

  constructor(
    private matDialog: MatDialog,
    private userService: UserService,
     @Inject('IS_DEV') private isDev: boolean,
     ) {
      this.userService.loadUsers();
      this.users = this.userService.getUsers();
     }

     ngOnDestroy(): void {
     this.destroyed.next(true);
     }

     onCreateUser(): void {
     this.matDialog

    .open(AlumnosFormDialogComponent)

    .afterClosed()

    .subscribe({
      next: (v) => {
        if(v) {
              this.userService.createUser({
              name: v.name,
              email: v.email,
              password: v.password,
              surname: v.surname
            });
        }
      },
    });
  }
  onDeleteUser(userToDelete: User): void {
    if (confirm(`¿Esta seguro de eliminar a ${userToDelete.name}?`)) {
      this.userService.deleteUserById(userToDelete.id);
    }
  }

  onEditUser(userToEdit: User): void {
    this.matDialog
    .open(AlumnosFormDialogComponent, {
      data: userToEdit
    })
    .afterClosed()
    .subscribe({
      next: (userUpdated) => {
        if (userUpdated) {
          this.userService.updateUserById(userToEdit.id, userUpdated);
        }
      },
    });
  }
}

function Of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) {
  throw new Error('Function not implemented.');
}
