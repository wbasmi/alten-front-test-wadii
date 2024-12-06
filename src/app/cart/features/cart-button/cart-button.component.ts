import {Component, computed, inject} from '@angular/core';
import {BadgeModule} from "primeng/badge";
import {CartService} from "../../data-access/cart.service";
import {ButtonModule} from "primeng/button";
import {ProductFormComponent} from "../../../products/ui/product-form/product-form.component";
import {DialogModule} from "primeng/dialog";
import {CartDetailsComponent} from "../cart-details/cart-details.component";

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [
    BadgeModule,
    ButtonModule,
    ProductFormComponent,
    DialogModule,
    CartDetailsComponent,
  ],
  templateUrl: './cart-button.component.html',
})
export class CartButtonComponent {
  public readonly cartService = inject(CartService);

  public readonly cart = this.cartService.cart();

  public readonly cartCount = computed(() => this.cartService.cart().reduce(
    (acc, p) => acc + p.quantity(), 0),
  );

  isCartVisible = false;

  openCart() {
    this.isCartVisible = true;
  }

  cancelCart() {
    this.isCartVisible = false;
  }
}
