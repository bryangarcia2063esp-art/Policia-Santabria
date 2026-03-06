import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulations } from './regulations';

describe('Regulations', () => {
  let component: Regulations;
  let fixture: ComponentFixture<Regulations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Regulations],
    }).compileComponents();

    fixture = TestBed.createComponent(Regulations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
