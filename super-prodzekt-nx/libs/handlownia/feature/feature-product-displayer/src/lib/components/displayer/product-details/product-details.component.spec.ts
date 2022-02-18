import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import {fireEvent, getByTestId, getByText, render, RenderResult} from "@testing-library/angular";
import {DisplayerComponent} from "../displayer.component";
import {screen} from '@testing-library/dom'

describe('ProductDetailsComponent - the best :)', () => {
  let component: RenderResult<ProductDetailsComponent>;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    component = await render(ProductDetailsComponent);
    fixture = TestBed.createComponent(ProductDetailsComponent);
  });

  fit('should display all option on navigation bar', () => {
    const { getByTestId } = component;

    // fireEvent.click(getByTestId('card'));
    // fixture.nativeElement.dispatch(new Event('click'));
    // jest.spyOn(fixture.componentInstance.productClicked, 'emit');

    // fixture.detectChanges();
    // expect(fixture.componentInstance.xd).toBe(2);

    // expect(fixture.componentInstance.productClicked.emit).toHaveBeenCalled();


    // expect(getByTestId('button')).not.toBeDisabled()
  })
});
