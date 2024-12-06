import {Component, Input} from '@angular/core';
import {InventoryStatus} from "../../data-access/product.model";

@Component({
  selector: 'app-product-stock-status-badge',
  standalone: true,
  imports: [],
  templateUrl: './product-stock-status-badge.component.html',
  styleUrl: './product-stock-status-badge.component.css'
})
export class ProductStockStatusBadgeComponent {

  @Input({
    required: true,
  })
  inventoryStatus: InventoryStatus = 'INSTOCK'
}
