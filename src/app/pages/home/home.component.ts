import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogoConfirmacionComponent } from "src/app/components/dialogo-confirmacion/dialogo-confirmacion.component";
@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor(public dialogo: MatDialog) {}
  mostrarDialogo(): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Te gusta programar en TypeScript?`
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
