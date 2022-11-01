import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopamujerComponent } from './ropamujer.component';

describe('RopamujerComponent', () => {
  let component: RopamujerComponent;
  let fixture: ComponentFixture<RopamujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopamujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopamujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
