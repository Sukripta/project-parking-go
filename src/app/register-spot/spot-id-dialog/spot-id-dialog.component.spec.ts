import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotIdDialogComponent } from './spot-id-dialog.component';

describe('SpotIdDialogComponent', () => {
  let component: SpotIdDialogComponent;
  let fixture: ComponentFixture<SpotIdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotIdDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
