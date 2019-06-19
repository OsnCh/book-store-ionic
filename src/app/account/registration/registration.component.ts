import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/common/constants';
import { CustomValidators } from 'src/app/shared/custom.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  private registrationGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required,
      Validators.pattern(Constants.passwordPattern)])],
      confirmPassword: ['', [Validators.required]]
    }, { validators: CustomValidators.ConfirmPassword });
    this.getControl('password').valueChanges.subscribe(() => {
      this.getControl('confirmPassword').updateValueAndValidity();
    });
  }

  public getControl(name: string){
    return this.registrationGroup.controls[name];
  }
}
