import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  basicDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;
  genderLabelControl: FormControl = new FormControl("male", Validators.required);
  startDate = new Date(1990, 0, 1);
  hide: boolean = true;
  imageUrl: string | ArrayBuffer = "assets/images/no-image-available.jpg";

  constructor(private fb: FormBuilder) {
    this.basicDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      dateOfBirth: ['', Validators.required],
      houseNumberAptName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      addrState: ['', Validators.required],
      area: ['', Validators.required],
      postalCode: ['', Validators.required],
      contactNumber: ['', Validators.required],
      photo: ['', Validators.required]
    });

    this.accountDetailsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      idProofType: ['', Validators.required],
      idProof: ['', Validators.required],
      addressProofType: ['', Validators.required],
      addressProof: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
  }

  async onSubmit(): Promise<void> {
  }

  async onFileInput(): Promise<void> {

  }
}
