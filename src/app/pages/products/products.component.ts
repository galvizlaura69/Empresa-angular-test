import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public products = [];

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    console.log("product")
  }
}
