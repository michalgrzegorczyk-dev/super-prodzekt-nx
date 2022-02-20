import {DisplayerComponent} from './displayer.component';
import {render, RenderResult} from "@testing-library/angular";
import {ProductsService} from "../../services/products.service";
import {of} from "rxjs";
import {TestBed} from "@angular/core/testing";
import {DisplayType} from "../../enums/display-type";
import {ProductDetailsModule} from "./product-details/product-details.module";

const getProductsData = of([
  {
    id: 1,
    header: 'auto',
    description: 'fajne',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: false,
  },
  {
    id: 2,
    header: 'xd',
    description: 'elo',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: false,
  }
]);

describe('DisplayerComponent', () => {
  let component: RenderResult<DisplayerComponent>;

  beforeEach(async () => {
    component = await render(DisplayerComponent, {
      imports: [
        ProductDetailsModule,
      ],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            getProducts: jest.fn().mockReturnValue(getProductsData)
          }
        }
      ],
      componentProperties: {
        displayType: DisplayType.ALL,
      }
    });
  });

  it('should call service from input setter', () => {
    const service = TestBed.inject(ProductsService);
    expect(service.getProducts).toHaveBeenCalledWith(DisplayType.ALL);
  });

  it('should display product details components', () => {
    const {getByText} = component;

    expect(getByText('auto')).toBeInTheDocument();
    expect(getByText('fajne')).toBeInTheDocument();

    expect(getByText('xd')).toBeInTheDocument();
    expect(getByText('elo')).toBeInTheDocument();
  });
});
