import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

constructor(
    public dialog: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public body: any) { }

    closeDialog(): void {
      this.dialog.close(false);
    }
  ngOnInit() {
  }

}
