import {Component, inject, Input, signal} from '@angular/core';
import {ButtonModule} from "primeng/button";
import { InputNumberModule } from 'primeng/inputnumber';
import {Product} from "../../../products/data-access/product.model";
import EMPTY_PRODUCT from "../../../products/constants/empty-product";
import {CartService} from "../../data-access/cart.service";
import {FormsModule} from "@angular/forms";
import product from "../../../products/constants/empty-product";

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [
    ButtonModule,
    InputNumberModule,
    FormsModule,
  ],
  templateUrl: './add-to-cart.component.html',
})
export class AddToCartComponent {
  private cartService = inject(CartService);

  @Input({
    required: true,
  })
  product: Product = EMPTY_PRODUCT

  quantity = 1;

  onAddToCart() {
    this.cartService.addProduct(this.product);
    this.quantity = 1;
  }

  containsProduct(product: Product) {
    return !!this.cartService.containsProduct(product);
  }

  updateProductInCart() {
    this.cartService.setQuantity(this.product, this.quantity);
  }
}
