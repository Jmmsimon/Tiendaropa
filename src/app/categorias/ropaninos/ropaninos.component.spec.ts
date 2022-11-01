import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaninosComponent } from './ropaninos.component';

describe('RopaninosComponent', () => {
  let component: RopaninosComponent;
  let fixture: ComponentFixture<RopaninosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaninosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaninosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
