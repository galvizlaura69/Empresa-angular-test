import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceUsers } from 'src/services/serviceUsers';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  user= {id:null,name:""};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceUsers: ServiceUsers
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.user.id = param['id'];
    });
    this.serviceUsers.getUsersById(this.user.id).subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
