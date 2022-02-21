import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductDetailsComponent} from './product-details.component';
import {fireEvent, render, RenderResult} from "@testing-library/angular";
import {
  DisplayerComponent
} from "../../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/components/displayer/displayer.component";
import {ProductDetailsModule} from "@super-prodzekt-nx/handlownia/feature/feature-product-displayer";
import {
  ProductsService
} from "../../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/services/products.service";
import {
  DisplayType
} from "../../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/enums/display-type";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('ProductDetailsComponent', () => {
  let component: RenderResult<ProductDetailsComponent>;

  beforeEach(async () => {
    component = await render(ProductDetailsComponent, {
      imports: [
        ProductDetailsModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: '2'}}
          }
        },
        {
          provide: ProductsService,
          useValue: {
            getProductById: jest.fn().mockReturnValue({
              id: 1,
              header: 'auto',
              description: 'fajne',
              imageUrl: 'https://picsum.photos/200/300',
              isPromoted: false,
            })
          }
        },

      ],
    });
  });

  it('should call service from input setter', () => {
    const {getByTestId, fixture} = component;

    const service = TestBed.inject(ProductsService);

    jest.spyOn(fixture.componentInstance._productsService, 'getProductById');

    expect(service.getProducts).toHaveBeenCalled();


    // expect(service.getProducts).toHaveBeenCalledWith(DisplayType.ALL);
  });

});
