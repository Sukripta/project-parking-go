import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFailDialogComponent } from './register-fail-dialog.component';

describe('RegisterFailDialogComponent', () => {
  let component: RegisterFailDialogComponent;
  let fixture: ComponentFixture<RegisterFailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
