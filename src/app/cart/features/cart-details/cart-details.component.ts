import {Component, inject, OnInit, signal} from '@angular/core';
import {CartService} from "../../data-access/cart.service";
import {Cart} from "../../data-access/cart.model";
import {TableModule} from "primeng/table";
import {Product} from "../../../products/data-access/product.model";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent {
  private cartService = inject(CartService);

  cart = this.cartService.cart;

  removeFromCart(product: Product) {
    this.cartService.removeProduct(product);
  }
}
