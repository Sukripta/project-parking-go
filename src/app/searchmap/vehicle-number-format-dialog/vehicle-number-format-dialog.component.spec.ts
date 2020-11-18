import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNumberFormatDialogComponent } from './vehicle-number-format-dialog.component';

describe('VehicleNumberFormatDialogComponent', () => {
  let component: VehicleNumberFormatDialogComponent;
  let fixture: ComponentFixture<VehicleNumberFormatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleNumberFormatDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNumberFormatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
