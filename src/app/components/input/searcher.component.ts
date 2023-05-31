import { Component, OnInit, Inject } from '@angular/core';
import { ServiceUsers } from 'src/services/serviceUsers';

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SeacherComponent implements OnInit {


  constructor(
  ) {}


  ngOnInit() {
    //es que va afiltarr los usuarios por nombre o id
  }

}
