import {TypicalSuperCardComponent} from './typical-super-card.component';
import {getByText, render, RenderResult} from "@testing-library/angular";

describe('TypicalSuperCardComponent', () => {
  let component: RenderResult<TypicalSuperCardComponent>;

  beforeEach(async () => {
    component = await render(TypicalSuperCardComponent, {
      componentProperties: {
        title: 'dziadek w lesie',
      }
    })
  });

  it('should display header from input', () => {
    const { getByText } = component;
    expect(getByText('dziadek w lesie')).toBeInTheDocument()
  });
});
