import { TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms"
import { AlumnosFormDialogComponent } from "./alumnos-form-dialog.component"
import { MatDialogRef } from "@angular/material/dialog"

describe('AlumnosFormDialogComponen', () => {
  let component: AlumnosFormDialogComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosFormDialogComponent],
      imports: [ReactiveFormsModule],
    })

    component = TestBed.createComponent(AlumnosFormDialogComponent).componentInstance
  })

  it ('El componente debe instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  })
})