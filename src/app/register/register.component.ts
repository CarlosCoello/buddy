import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterPostService } from '../services/register-post.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
message: String;
messageClass: String;
showMessage = false;

  constructor(private fb: FormBuilder, private rps: RegisterPostService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      candidate: [''],
      post: ['']
    });
  }

  registerMe() {
    const info = {
      firstname: this.registerForm.get('firstname').value,
      lastname: this.registerForm.get('lastname').value,
      email: this.registerForm.get('email').value,
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
      candidate: this.registerForm.get('candidate').value,
      post: this.registerForm.get('post').value
    };

    if (info.candidate === true) {
      this.rps.registerUser(info).subscribe( register => {
        if (!register.success) {
          this.message = register.message;
          this.messageClass = 'alert alert-danger';
          this.showMessage = true;
          setTimeout( () => {
            this.showMessage = false;
          }, 1500);
        } else {
          this.message = register.message;
          this.messageClass = 'alert alert-success';
          this.showMessage = true;
          this.registerForm.reset();
          setTimeout( () => {
            this.showMessage = false;
          }, 1500);
        }
      });
    }

    if (info.post === true) {
      this.rps.registerUser(info).subscribe( register => {
        if (!register.success) {
          this.message = register.message;
          this.messageClass = 'alert alert-danger';
          this.showMessage = true;
          setTimeout( () => {
            this.showMessage = false;
          }, 1500);
        } else {
          this.message = register.message;
          this.messageClass = 'alert alert-success';
          this.showMessage = true;
          this.registerForm.reset();
          setTimeout( () => {
            this.showMessage = false;
          }, 1500);
        }
      });
    }

  }

}
