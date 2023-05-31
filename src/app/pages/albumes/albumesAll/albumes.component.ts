import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion.component';
import { serviceAlbumes } from 'src/services/serviceAlbumes';


@Component({
  selector: "albumes",
  templateUrl: "./albumes.component.html",
  styleUrls: ["./albumes.component.css"]
})
export class AlbumesComponent implements OnInit{
  public albumes: any;
  public selectedAlbum: any;
  public page: any;

  constructor(
    private router:Router,
    private serviceAlbumes: serviceAlbumes,
    public dialogo: MatDialog
  ) {}

  ngOnInit () {
    this.serviceAlbumes.getAlbumes().subscribe((res) => {
      this.albumes = res;
    });
  }

  mostrarDialogo(id:number): void {
   this.serviceAlbumes.getAlbumById(id).subscribe((res) => {
    this.selectedAlbum = res;
    this.dialogo
    .open(DialogoConfirmacionComponent, {
      data:{title:this.selectedAlbum.title, url:this.selectedAlbum.url}
    })
    .afterClosed()
    .subscribe();
  });


  }
}
