import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfContactComponent } from './rf-contact.component';

describe('RfContactComponent', () => {
  let component: RfContactComponent;
  let fixture: ComponentFixture<RfContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
