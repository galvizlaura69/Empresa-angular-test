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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceUsers: ServiceUsers,
    private servicePost: servicePost
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.user.id = param['id'];
    });
    this.serviceUsers.getUsersById(this.user.id).subscribe((res) => {
      this.user = res;
      console.log("usuario seleccionado",this.user);
    });
    this.postByUser = this.servicePost.getPostByUserId(this.user.id);
    console.log("todos los post",this.postByUser)
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
