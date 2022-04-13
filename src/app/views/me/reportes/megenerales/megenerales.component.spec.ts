import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegeneralesComponent } from './megenerales.component';

describe('MegeneralesComponent', () => {
  let component: MegeneralesComponent;
  let fixture: ComponentFixture<MegeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
