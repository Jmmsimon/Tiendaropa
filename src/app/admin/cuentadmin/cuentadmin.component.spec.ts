import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentadminComponent } from './cuentadmin.component';

describe('CuentadminComponent', () => {
  let component: CuentadminComponent;
  let fixture: ComponentFixture<CuentadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
