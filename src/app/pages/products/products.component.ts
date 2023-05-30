import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUsers } from 'src/services/serviceUsers';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{
  public users :any ;

  constructor(
    private router: Router,
    private serviceUsers: ServiceUsers,
  ) {}

  ngOnInit() {
    this.serviceUsers.getUsers( ).subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }
  productSelected(id:any) {
    this.router.navigate(['/product', id]);
  }
}
