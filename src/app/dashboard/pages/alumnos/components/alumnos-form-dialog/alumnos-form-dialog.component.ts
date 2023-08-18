import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-alumnos-form-dialog',
  templateUrl: './alumnos-form-dialog.component.html',
  styleUrls: ['./alumnos-form-dialog.component.scss']
})
export class AlumnosFormDialogComponent {
  editingUser?: User;
  nameControl = new FormControl<string | null>(null,[Validators.required])
  surnameControl = new FormControl<String | null>(null, [Validators.required])
  emailControl = new FormControl<String | null>(null, [Validators.required, Validators.email])
  passwordControl = new FormControl<String | null>(null, [Validators.required])


  userForm = new FormGroup({
     name: this.nameControl,
     surname: this.surnameControl,
     email: this.emailControl,
     password: this.passwordControl,
  });

  constructor(
    private dialogRef: MatDialogRef<AlumnosFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: User
    ){
      if (this.data) {
        this.editingUser = this.data;
        this.nameControl.setValue(this.data.name);
        this.surnameControl.setValue(this.data.surname);
        this.emailControl.setValue(this.data.email);
        this.passwordControl.setValue(this.data.password);
      }
    }


  onSubmit(): void {

    if(this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    }else {
      this.dialogRef.close(this.userForm.value);
    }
  }
}
