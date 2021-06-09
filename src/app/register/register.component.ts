import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      email: ['', Validators.email],
      contactnumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }

  async ngOnInit(): Promise<void> {
  }

  async onSubmit(): Promise<void> {
  }
}
