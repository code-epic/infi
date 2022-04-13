import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregistrarComponent } from './empregistrar.component';

describe('EmpregistrarComponent', () => {
  let component: EmpregistrarComponent;
  let fixture: ComponentFixture<EmpregistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
