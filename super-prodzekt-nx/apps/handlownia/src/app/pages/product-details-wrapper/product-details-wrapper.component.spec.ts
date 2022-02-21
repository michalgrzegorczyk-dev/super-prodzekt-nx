import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsWrapperComponent } from './product-details-wrapper.component';

describe('ProductDetailsWrapperComponent', () => {
  let component: ProductDetailsWrapperComponent;
  let fixture: ComponentFixture<ProductDetailsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
