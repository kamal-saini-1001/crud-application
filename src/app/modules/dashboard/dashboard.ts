import { Component, inject, OnInit } from '@angular/core';
import { Common } from '../../service/common';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddDialog } from '../add-dialog/add-dialog';
import { DeleteDialog } from '../delete-dialog/delete-dialog';
import { Snackbar } from '../../common/service/snackbar';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule, MatIcon, DatePipe, MatAnchor],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'gender', 'rollNo', 'phone', 'course', 'year', 'percentage', 'date', 'action'];

  students!: any[];

  private commonService = inject(Common);
  private dialog = inject(MatDialog);
  private snackbar = inject(Snackbar)

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.students = [...this.commonService.getStudents()];
  }

  openDialog(action: string, data: any) {
    if (action === 'add') {
      const dialogRef = this.dialog.open(AddDialog, {
        width: '75vw',
        height: '90vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        panelClass: 'student-dialog',
        disableClose: true,
        data: {
          action: 'add', data: null
        }
      })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.commonService.addStudents(result);
          this.getStudents();
          this.snackbar.success('Student Added Successfully');
        }
      })
    }

    if (action === 'edit') {
      const dialogRef = this.dialog.open(AddDialog, {
        width: '75vw',
        height: '90vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        disableClose: true,
        panelClass: 'student-dialog',
        data: {
          action: 'edit',
          data: data
        }
      })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.commonService.editStudent(result);
          this.getStudents();
          this.snackbar.success('Student Updated Successfully');
        }
      })
    }

    if (action === 'delete') {
      const dialogRef = this.dialog.open(DeleteDialog, {
        width: '50%',
        maxHeight: '30%',
        disableClose: true
      })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.commonService.deleteStudent(data.id);
          this.getStudents();
          this.snackbar.success('Student Deleted Successfully')
        }
      })
    }
  }
}
