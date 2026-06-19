import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { LogoutDialog } from '../modules/logout-dialog/logout-dialog/logout-dialog';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MatDivider, RouterOutlet, RouterLinkWithHref],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  private router = inject(Router);
  private dialog = inject(MatDialog)

  goToHome() {
    this.router.navigate(['app/home']);
  }

  logout() {
    const dialogRef = this.dialog.open(LogoutDialog, {
      width: '50%',
      maxHeight: '30%',
      disableClose: true
    })
  }
}
