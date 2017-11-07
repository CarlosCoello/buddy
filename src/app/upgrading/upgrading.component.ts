import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPostService } from '../services/register-post.service';

@Component({
  selector: 'app-upgrading',
  templateUrl: './upgrading.component.html',
  styleUrls: ['./upgrading.component.css']
})
export class UpgradingComponent implements OnInit {
upgradeForm: FormGroup;
showMessage = false;
message: String;
messageClass: String;

  constructor(private fb: FormBuilder, private router: Router, private rps: RegisterPostService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.upgradeForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      cardnumber: [''],
      amount: ['']
    });
  }

  upgradeMyAccount(){
    const payment = {
      firstname: this.upgradeForm.get('firstname').value,
      lastname: this.upgradeForm.get('lastname').value
    }

    this.rps.upgradeAccount(payment).subscribe( data => console.log(data));
  }


}
