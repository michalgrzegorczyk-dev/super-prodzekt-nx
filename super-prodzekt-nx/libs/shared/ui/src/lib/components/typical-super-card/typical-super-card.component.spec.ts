import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalSuperCardComponent } from './typical-super-card.component';

describe('TypicalSuperCardComponent', () => {
  let component: TypicalSuperCardComponent;
  let fixture: ComponentFixture<TypicalSuperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypicalSuperCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypicalSuperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
