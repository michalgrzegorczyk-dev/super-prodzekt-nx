import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {render, RenderResult} from "@testing-library/angular";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Mozna pominac ten test bo on tak naprawde nic nie wnosi. Wazniejsze jest sorawdzanie funkcjonalnosci
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain nav', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.firstChild.tagName).toBe('NAV');
  });

  it('should contain <a> tags', () => {
    const aTags = fixture.debugElement.nativeElement.querySelectorAll('a');
    const result = ['Strona głowna', 'Wszystkie ogloszenia', 'Rejestracja', 'Logowanko'];
    for (let i = 0; i > result.length; i++) {
      expect(aTags[i].text).toContain(result[i]);
    }
  });
});

describe('NavbarComponent - better', () => {
  let component: RenderResult<NavbarComponent>;

  beforeEach(async () => {
    component = await render(NavbarComponent);
  });

  // Generalnie chodzi o to zeby testowac z poziomu uzytkownika a nie wnikac w szczegoly implementacji.
  // W tym wypadku sprawdzam czy widze dostepne 4 opcje ale mnie nie obchodzi czy to jest link czy button
  // W przyszlosci mozna sprawdzac czy mnie przenosi do odpowiedniej strony po kliknieciu
  it('should display all option on navigation bar', () =>{
    const { getByText } = component;
    const expectedOptions = ['Strona głowna', 'Wszystkie ogloszenia', 'Rejestracja', 'Logowanko'];
    expectedOptions.forEach(option => {
      expect(getByText(option)).toBeTruthy();
    })
  })
})
