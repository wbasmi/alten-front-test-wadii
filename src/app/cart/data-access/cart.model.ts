import {Product} from "../../products/data-access/product.model";
import {WritableSignal} from "@angular/core";

export type Cart = CartItem[];

export type CartItem = {
  product: Product;
  quantity: WritableSignal<number>;
};
