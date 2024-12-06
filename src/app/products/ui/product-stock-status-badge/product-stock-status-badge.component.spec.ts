import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStockStatusBadgeComponent } from './product-stock-status-badge.component';

describe('ProductStockLabelComponent', () => {
  let component: ProductStockStatusBadgeComponent;
  let fixture: ComponentFixture<ProductStockStatusBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductStockStatusBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStockStatusBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
