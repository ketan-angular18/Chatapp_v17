import { Component, Inject, Input, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-mat-dialog',
  standalone: true,
  imports: [MatDialogModule,
           MatButtonModule],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.css'
})

export class MatDialogComponent {

  /**
   * @dialogRef for inject matdialogrefrence
   * @data for inject dialog data
  */
 public dialogRef = inject(MatDialogRef<MatDialogComponent>)
 public data : { message: string } = inject(MAT_DIALOG_DATA)

  /**
   * onNoClick for close dialog ref and pass click as result 
   */
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  /**
   * onNoClick for close dialog ref and pass click true as result 
   */
  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
