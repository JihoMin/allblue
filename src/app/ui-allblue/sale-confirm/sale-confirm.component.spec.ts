import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleConfirmComponent } from './sale-confirm.component';

describe('SaleConfirmComponent', () => {
  let component: SaleConfirmComponent;
  let fixture: ComponentFixture<SaleConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
