import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
showMessage = false;
message: String;
messageClass: String;

  constructor(private fb: FormBuilder,
    private as: AuthenticateService,
    private router: Router,
    private ag: AuthGuard) {
    this.createForm();
   }

  ngOnInit() {
    if (this.ag.redirectUrl) {
      this.showMessage = true;
      this.message = 'You need to log in to view that page';
      this.messageClass = 'alert alert-warning';
      setTimeout( () => {
        this.showMessage = false;
      }, 1500);
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logMeIn() {
    const user = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    this.as.authenticateMe(user).subscribe( data => {
      if (!data.success) {
        this.showMessage = true;
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
        setTimeout( () => {
          this.showMessage = false;
        }, 1500);
      } else {
        this.showMessage = true;
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        this.as.storeLoggedInUserData(data.token, data.user);
        if (data.user.account === 'candidate') {
          setTimeout( () => {
            this.showMessage = false;
            this.router.navigate(['cdashboard']);
          }, 1500);
        } else {
          setTimeout( () => {
            this.showMessage = false;
            this.router.navigate(['edashboard']);
          }, 1500);
        }
      }
    });
  }

}
