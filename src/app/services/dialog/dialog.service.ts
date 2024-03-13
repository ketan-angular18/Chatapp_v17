import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/helper/mat-dialog/mat-dialog.component';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

 /**
  * @dialog for inject matdialog
  */
  private dialog = inject(MatDialog)

  /**
   * openYesNoDialog for open and return result of dialog after close the dialog
   * @returns result as boolean as per user click yes or no 
   */
  openYesNoDialog(message:string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const dialogRef = this.dialog.open(MatDialogComponent,{
        width: '300px',
        data :{message}
      });
      dialogRef.afterClosed().subscribe(result => {
        resolve(result)
        return result
      });
    });
  }
}
