import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfRegistrationComponent } from './rf-registration.component';

describe('RfRegistrationComponent', () => {
  let component: RfRegistrationComponent;
  let fixture: ComponentFixture<RfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
