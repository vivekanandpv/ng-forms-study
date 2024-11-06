import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TfLoginComponent } from './tf-login/tf-login.component';
import { RfRegistrationComponent } from './rf-registration/rf-registration.component';
import { RfFeedbackComponent } from './rf-feedback/rf-feedback.component';
import { RfContactComponent } from './rf-contact/rf-contact.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { Observable } from 'rxjs';
import { QuestionBase } from './models/question-base';
import { QuestionService } from './question.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TfLoginComponent,
    RfRegistrationComponent,
    RfFeedbackComponent,
    RfContactComponent,
    DynamicFormComponent,
    AsyncPipe,
  ],
  providers: [QuestionService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-forms-study';

  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
