import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceExam } from './police-exam';

describe('PoliceExam', () => {
  let component: PoliceExam;
  let fixture: ComponentFixture<PoliceExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliceExam],
    }).compileComponents();

    fixture = TestBed.createComponent(PoliceExam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
