import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

constructor(
    public dialogo: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public body: any) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
  ngOnInit() {
  }

}
