import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfFeedbackComponent } from './rf-feedback.component';

describe('RfFeedbackComponent', () => {
  let component: RfFeedbackComponent;
  let fixture: ComponentFixture<RfFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
