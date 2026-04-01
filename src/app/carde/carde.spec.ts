import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carde } from './carde';

describe('Carde', () => {
  let component: Carde;
  let fixture: ComponentFixture<Carde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carde],
    }).compileComponents();

    fixture = TestBed.createComponent(Carde);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
