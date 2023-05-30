import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { servicePost } from 'src/services/servicePost';
import { ServiceUsers } from 'src/services/serviceUsers';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  user= {id:null,name:""};
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
      console.log(this.user);
    });
    this.postByUser = this.servicePost.getPostByUserId(this.user.id);
    console.log("post",this.postByUser)
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
