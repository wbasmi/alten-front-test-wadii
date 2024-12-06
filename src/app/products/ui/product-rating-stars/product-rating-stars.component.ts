import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-rating-stars',
  standalone: true,
  imports: [],
  templateUrl: './product-rating-stars.component.html',
})
export class ProductRatingStarsComponent {

  @Input({
    required: true,
  })
  stars: number = 0;
}
