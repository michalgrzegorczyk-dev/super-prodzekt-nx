import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';

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
