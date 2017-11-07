import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: any;
firstname: String;
lastname: String;
email: String;
id: String;
disableFirstName = true;
disableLastName = true;
disableEmail = true;

  constructor(private ps: ProfileService) {}

  ngOnInit() {
    this.getProfileInfo();
  }

  getProfileInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;

    this.ps.getProfile(id).subscribe( data => {
      console.log(data);
      this.profile = data.profile;
      this.firstname = this.profile.firstname;
      this.lastname = this.profile.lastname;
      this.email = this.profile.email;
      this.id = this.profile._id;
    });
  }

  enable(fieldName) {
    document.getElementById(fieldName + '-enable').classList.add('pause-fade-in');
    document.getElementById(fieldName + '-cancel').classList.remove('pause-fade-in');
    document.getElementById(fieldName + '-update').classList.remove('pause-fade-in');
    document.getElementById(fieldName).classList.add('enabled');  }

  cancel(fieldName) {
    document.getElementById(fieldName + '-cancel').classList.add('pause-fade-in');
    document.getElementById(fieldName + '-update').classList.add('pause-fade-in');
    document.getElementById(fieldName + '-enable').classList.remove('pause-fade-in');
    document.getElementById(fieldName).classList.remove('enabled');
  }

  update(fieldName) {
    document.getElementById(fieldName + '-cancel').classList.add('pause-fade-in');
    document.getElementById(fieldName + '-update').classList.add('pause-fade-in');
    document.getElementById(fieldName + '-enable').classList.remove('pause-fade-in');
    document.getElementById(fieldName).classList.remove('enabled');
  }

  enableFirstname() {
    this.disableFirstName = false;
    this.enable('firstname');
  }

  cancelFirstNameUpdate() {
    this.disableFirstName = true;
    this.cancel('firstname');
  }

  updateFirstName () {
    const info = {
      id: this.id,
      firstname: this.firstname
    };
    
    this.ps.updateProfileFirstName(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('firstname');
    });
  }

  enableLastname() {
    this.disableLastName = false;
    this.enable('lastname');
  }

  cancelLastNameUpdate() {
    this.disableLastName = true;
    this.cancel('lastname');
  }

  updateLastName() {
    const info = {
      id: this.id,
      lastname: this.lastname
    };
    
    this.ps.updateProfileLastName(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('lastname');
    });
  }

  enableEmail() {
    this.disableEmail = false;
    this.enable('email');
  }

  cancelEmailUpdate() {
    this.disableEmail = true;
    this.cancel('email');
  }

  updateEmail() {
    const info = {
      id: this.id,
      email: this.email
    };

    this.ps.updateProfileEmail(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('email');
    });
  }

}
