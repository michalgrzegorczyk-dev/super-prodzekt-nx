import {TestBed} from '@angular/core/testing';

import {ProductsService} from './products.service';
import {DisplayType} from "../enums/display-type";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    service = TestBed.inject(ProductsService);
  });

  it('should be created', (done) => {
    service.getProducts(DisplayType.ALL).subscribe(val => {
      expect(val.length).toBe(6);
      done();
    });
  });
});
