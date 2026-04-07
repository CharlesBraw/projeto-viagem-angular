import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card0 } from './card0';

describe('Card0', () => {
  let component: Card0;
  let fixture: ComponentFixture<Card0>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card0],
    }).compileComponents();

    fixture = TestBed.createComponent(Card0);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
