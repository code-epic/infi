import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpregistrarComponent } from './cmpregistrar.component';

describe('CmpregistrarComponent', () => {
  let component: CmpregistrarComponent;
  let fixture: ComponentFixture<CmpregistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpregistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpregistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
