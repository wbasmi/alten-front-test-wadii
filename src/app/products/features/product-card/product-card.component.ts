import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../data-access/product.model";
import EMPTY_PRODUCT from "../../constants/empty-product";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {CurrencyPipe} from "@angular/common";
import {ProductStockStatusBadgeComponent} from "../../ui/product-stock-status-badge/product-stock-status-badge.component";
import {ProductRatingStarsComponent} from "../../ui/product-rating-stars/product-rating-stars.component";
import {AddToCartComponent} from "../../../cart/features/add-to-cart/add-to-cart.component";
import product from "../../constants/empty-product";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CurrencyPipe,
    ProductStockStatusBadgeComponent,
    ProductRatingStarsComponent,
    AddToCartComponent,
  ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({
    required: true,
  })
  product: Product = EMPTY_PRODUCT;

  @Output() onUpdate = new EventEmitter<Product>();
  @Output() onDelete = new EventEmitter<Product>();

  onUpdateClick() {
    this.onUpdate.emit(this.product);
  }

  onDeleteClick() {
    this.onDelete.emit(this.product);
  }
}
