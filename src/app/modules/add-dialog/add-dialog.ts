import { Component, inject, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Snackbar } from '../../common/service/snackbar';

@Component({
  selector: 'app-add-dialog',
  imports: [MatDivider, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-dialog.html',
  styleUrl: './add-dialog.css',
})
export class AddDialog implements OnInit {

  heading!: string;
  studentForm!: FormGroup;

  genders = ['Male', 'Female', 'Other'];

  private readonly data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<AddDialog>);
  private fb = inject(FormBuilder);
  private snackbar = inject(Snackbar)

  ngOnInit(): void {
    this.initializeForm();

    if (this.data?.action === 'edit') {
      this.heading = 'Update Student';

      this.studentForm.patchValue({
        ...this.data.data,
        date: new Date(this.data.data.date)
      });
    } else {
      this.heading = 'Add Student';
    }
  }


  initializeForm() {
    this.studentForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      rollNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      course: ['', Validators.required],
      year: ['', Validators.required],
      percentage: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  cancel() {
    this.dialogRef.close()
  }

  confirm() {
    if (this.studentForm.invalid) {
      this.snackbar.info("Please fill all the requied fields");
      return;
    }
    this.dialogRef.close(this.studentForm.value)
  }

}
