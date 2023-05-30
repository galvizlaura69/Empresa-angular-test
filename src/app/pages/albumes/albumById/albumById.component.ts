import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion.component';
import { serviceAlbumes } from 'src/services/serviceAlbumes';

@Component({
  selector: "albumById",
  templateUrl: "./albumById.component.html",
  styleUrls: ["./albumById.component.css"]
})
export class AlbumByIdComponent {
  public albumById :any;

  constructor(
    private route: ActivatedRoute,
    private serviceAlbumes: serviceAlbumes,
    public dialogo: MatDialog
  ) {}

  ngOnInit() {

  }

  mostrarDialogo(): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data:{text:"mensaje", url:"http.google"}
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("¡A mí también!");
        } else {
          alert("Deberías probarlo, a mí me gusta :)");
        }
      });
  }
}
