import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { servicePost } from 'src/services/servicePost';
import { ServiceUsers } from 'src/services/serviceUsers';


@Component({
  selector: 'user',
  templateUrl: './userById.component.html',
  styleUrls: ['./userById.component.css'],
})
export class UserByIdComponent {
  user= {id:null,name:"", username:"",phone:234, email:""};
  postByUser ={};
  comentByPost = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceUsers: ServiceUsers,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.user.id = param['id'];
    });
    this.serviceUsers.getUsersById(this.user.id).subscribe((res) => {
      this.user = res;
    });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
