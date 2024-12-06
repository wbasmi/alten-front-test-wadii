import {computed, Injectable, signal} from '@angular/core';
import {Cart} from "./cart.model";
import {Product} from "../../products/data-access/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _cart = signal<Cart>([]);

  public readonly cart = this._cart.asReadonly();

  containsProduct(product: Product) {
    return this._cart().find(p => p.product.id === product.id);
  }



  public addProduct(product: Product, quantity: number = 1) {
    this._cart.update(cart => {
      const index = cart.findIndex(p => p.product.id === product.id);
      if (index === -1) {
        return [...cart, {product, quantity: signal(1)}];
      } else {
        const products = [...cart];
        products[index].quantity.update(
          (currentQuantity) => currentQuantity + quantity
        );

        return products;
      }
    });
  }

  public removeProduct(product: Product) {
    this._cart.update(cart => {
      return cart.filter(p => p.product.id !== product.id);
    });
  }

  public clear() {
    this._cart.set([]);
  }

  public setQuantity(product: Product, quantity: number) {
    if (quantity === 0) {
      this.removeProduct(product);
      return;
    }

    this._cart.update(cart => {
      const index = cart.findIndex(p => p.product.id === product.id);
      if (index === -1) {
        return cart;
      } else {
        const products = [...cart];
        products[index].quantity.set(quantity);
        return products;
      }
    });
  }
}
