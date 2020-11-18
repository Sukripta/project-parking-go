import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredSpotDetailsComponent } from './registered-spot-details.component';

describe('RegisteredSpotDetailsComponent', () => {
  let component: RegisteredSpotDetailsComponent;
  let fixture: ComponentFixture<RegisteredSpotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredSpotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredSpotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
