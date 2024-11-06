import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfLoginComponent } from './tf-login.component';

describe('TfLoginComponent', () => {
  let component: TfLoginComponent;
  let fixture: ComponentFixture<TfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TfLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
