import {ProductDetailsComponent} from './product-details.component';
import {fireEvent, render, RenderResult} from '@testing-library/angular';

describe('ProductDetailsComponent - the best :)', () => {
  let component: RenderResult<ProductDetailsComponent>;

  beforeEach(async () => {
    component = await render(ProductDetailsComponent, {
      componentProperties: {
        product: {
          id: 1,
          header: 'tytuł',
          description: 'dekskrypszon',
          imageUrl: 'imidżek',
          isPromoted: true,
        },
      }
    });
  });

  it('should emit value when clicked', () => {
    const {getByTestId, fixture} = component;
    jest.spyOn(fixture.componentInstance.productClicked, 'emit');
    fireEvent.click(getByTestId('card'));
    fixture.detectChanges();
    expect(fixture.componentInstance.productClicked.emit).toHaveBeenCalled();
  });

  it('should display properly card properties from input', () => {
    const {getByText, fixture, getByAltText} = component;
    fixture.detectChanges();
    expect(getByText('tytuł')).toBeInTheDocument();
    expect(getByText('dekskrypszon')).toBeInTheDocument();
    expect(getByAltText('dekskrypszon')).toHaveAttribute('src', 'imidżek');
  });
});
