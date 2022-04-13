import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BltregistrarComponent } from './bltregistrar.component';

describe('BltregistrarComponent', () => {
  let component: BltregistrarComponent;
  let fixture: ComponentFixture<BltregistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BltregistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BltregistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
