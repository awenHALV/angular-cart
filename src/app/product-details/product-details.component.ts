import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Product, products } from '../products';

import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find((prod) => prod.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('添加成功');
    this.router.navigate(['/cart']);
  }
}
