import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranks } from './ranks';

describe('Ranks', () => {
  let component: Ranks;
  let fixture: ComponentFixture<Ranks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ranks],
    }).compileComponents();

    fixture = TestBed.createComponent(Ranks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
