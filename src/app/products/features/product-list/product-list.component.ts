import {Component, inject, OnInit, signal} from "@angular/core";
import {Product} from "app/products/data-access/product.model";
import {ProductsService} from "app/products/data-access/products.service";
import {ProductFormComponent} from "app/products/ui/product-form/product-form.component";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import EMPTY_PRODUCT from "../../constants/empty-product";
import {ProductCardComponent} from "../product-card/product-card.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  standalone: true,
  imports: [DataViewModule, CardModule, ButtonModule, DialogModule, ProductFormComponent, ProductCardComponent],
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  public readonly products = this.productsService.products;

  public isDialogVisible = false;
  public isCreation = false;
  public readonly editedProduct = signal<Product>(EMPTY_PRODUCT);

  ngOnInit() {
    this.productsService.get().subscribe();
  }

  public onCreate() {
    this.isCreation = true;
    this.isDialogVisible = true;
    this.editedProduct.set(EMPTY_PRODUCT);
  }

  public onUpdate(product: Product) {
    this.isCreation = false;
    this.isDialogVisible = true;
    this.editedProduct.set(product);
  }

  public onDelete(product: Product) {
    this.productsService.delete(product.id).subscribe();
  }

  public onSave(product: Product) {
    if (this.isCreation) {
      this.productsService.create(product).subscribe();
    } else {
      this.productsService.update(product).subscribe();
    }
    this.closeDialog();
  }

  public onCancel() {
    this.closeDialog();
  }

  private closeDialog() {
    this.isDialogVisible = false;
  }
}
