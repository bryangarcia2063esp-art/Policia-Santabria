import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uniforms } from './uniforms';

describe('Uniforms', () => {
  let component: Uniforms;
  let fixture: ComponentFixture<Uniforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Uniforms],
    }).compileComponents();

    fixture = TestBed.createComponent(Uniforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
