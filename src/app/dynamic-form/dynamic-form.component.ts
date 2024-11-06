import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';
import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from '../question-control.service';
@Component({
  standalone: true,
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
  imports: [CommonModule, DynamicFormQuestionComponent, ReactiveFormsModule],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  qcs = inject(QuestionControlService);

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }
  onSubmit() {
    console.log('Dynamic Form Value', this.form.getRawValue());
  }
}
