import { Component, inject } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-dialog',
  imports: [MatAnchor],
  templateUrl: './logout-dialog.html',
  styleUrl: './logout-dialog.css',
})
export class LogoutDialog {

  private router = inject(Router);
  private dialogRef = inject(MatDialogRef<LogoutDialog>);

  cancel() {
    this.dialogRef.close();
  }

  logout() {
    this.dialogRef.close();
    this.router.navigate(['/login'])
  }

}
