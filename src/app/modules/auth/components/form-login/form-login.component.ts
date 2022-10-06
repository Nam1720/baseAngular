import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from "@angular/router";

import { saveToken } from 'src/app/utils/jwt';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  loading: boolean = false;
  formSubmited: boolean = false;
  dataSubcribe: any = null
  formLogin!: FormGroup;



  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.settingFormBuilder()
  }

  ngOnDestroy(): void {
    this.dataSubcribe && this.dataSubcribe.unsubscribe();
  }

  settingFormBuilder(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }

  checkFormValid(name: string): boolean {
    return this.formLogin.controls[name].invalid &&
      (
        this.formSubmited ||
        this.formLogin.controls[name].dirty ||
        this.formLogin.controls[name].touched
      )
  }

  onSubmit(): void {
    this.formSubmited = true;
    this.loading = true;
    if (this.formLogin.invalid) {
      this.messageService.add({ severity: 'warn', detail: 'Sign in error' });
      this.loading = false;
      return
    }
    const accountDefault = {
      username: 'demo',
      password: '123456'
    }
    if (this.formLogin.value.username === accountDefault.username && this.formLogin.value.password === accountDefault.password) {
      this.messageService.add({ severity: 'success', detail: 'Sign in success' });
      saveToken('123467');
      this.router.navigate(['over-view']);
    } else {
      this.messageService.add({ severity: 'warn', detail: 'Error' });
    }
    this.formSubmited = false;
    this.loading = false;
  }

}
