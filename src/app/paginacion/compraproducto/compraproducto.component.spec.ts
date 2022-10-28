import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraproductoComponent } from './compraproducto.component';

describe('CompraproductoComponent', () => {
  let component: CompraproductoComponent;
  let fixture: ComponentFixture<CompraproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
