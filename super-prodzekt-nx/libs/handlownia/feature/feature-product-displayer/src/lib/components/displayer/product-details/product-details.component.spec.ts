import { ProductDetailsComponent } from './product-details.component';
import { fireEvent, render, RenderResult } from '@testing-library/angular';

describe('ProductDetailsComponent - the best :)', () => {
  let component: RenderResult<ProductDetailsComponent>;

  beforeEach(async () => {
    component = await render(ProductDetailsComponent);
  });

  it('should display all option on navigation bar', () => {
    const { getByTestId, fixture } = component;
    jest.spyOn(fixture.componentInstance.productClicked, 'emit');
    fireEvent.click(getByTestId('card'));

    fixture.detectChanges();
    expect(fixture.componentInstance.xd).toBe(2);

    expect(fixture.componentInstance.productClicked.emit).toHaveBeenCalled();
    expect(getByTestId('button')).not.toBeDisabled();
    expect(getByTestId('button')).toBeInTheDocument();
  });
});
