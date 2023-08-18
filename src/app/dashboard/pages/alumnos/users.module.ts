import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent2 } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { AlumnosFormDialogComponent } from './components/alumnos-form-dialog/alumnos-form-dialog.component';
import { AlumnosTableComponent } from './components/alumnos-table/alumnos-table.component';
import { ControlErrorMessagePipe } from 'src/app/shared/pipes/control-error-message.pipe';
import { FullNamePipe } from 'src/app/shared/pipes/full-name.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AlumnosFormDialogComponent,
    ControlErrorMessagePipe,
    FullNamePipe,
    UserDetailComponent,
    UsersComponent2,
    AlumnosTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatIconModule,    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    UsersComponent2,
  ],
  providers: [
    // {
    //   provide: UserService,
    //   useClass: UserMockService,
    // },
    {
      provide: 'IS_DEV',
      useValue: true,
    },
    // {
    //   provide: UserService,
    //   useFactory: (AuthService: AuthService) => {
    //     const isAdmin = authService.authUser.role === 'ADMIN';
    //     return isDev ? new UserMockService() : new UserService();
    //   },
    //   deps: [
    //     AuthService
    //   ]
    // },
  ],
})
export class UsersModule { }
