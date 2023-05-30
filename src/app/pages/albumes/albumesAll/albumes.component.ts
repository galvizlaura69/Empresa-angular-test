import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { serviceAlbumes } from 'src/services/serviceAlbumes';

@Component({
  selector: "albumes",
  templateUrl: "./albumes.component.html",
  styleUrls: ["./albumes.component.css"]
})
export class AlbumesComponent {
  public albumes: any;

  constructor(
    private router:Router,
    private serviceAlbumes: serviceAlbumes,
  ) {}

  ngOnInit () {
    this.serviceAlbumes.getAlbumes().subscribe((res) => {
      this.albumes = res;
      console.log("albumes",this.albumes);
    });
  }
}
