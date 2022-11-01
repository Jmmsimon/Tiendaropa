import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopahombreComponent } from './ropahombre.component';

describe('RopahombreComponent', () => {
  let component: RopahombreComponent;
  let fixture: ComponentFixture<RopahombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopahombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopahombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
