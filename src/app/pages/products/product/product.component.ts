import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product = {id:0};
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      console.log("id",param['id']);
      this.product.id = param['id'];
    });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
