import { Component, OnInit } from '@angular/core';
import { RegisterPostService } from '../services/register-post.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
cardDebitCredit = ['credit', 'debit'];
cardTypes = ['visa', 'mastercard', 'american express', 'discover card'];
user = JSON.parse(localStorage.getItem('user'));
userid = this.user.id;
disableFirstName = true;
disableLastName = true;
disableAddress = true;
disableCity = true;
disableState = true;
disableCard = true;
disableCardType = true;
disableCardNum = true;
firstname: String;
lastname: String;
address: String;
city: String;
state: String;
card: String;
cardtype: String;
cardnum: String;
id: String;

  constructor(private rps: RegisterPostService) { }

  ngOnInit() {
    this.displayPaymentInfo();
  }

  displayPaymentInfo() {
    this.rps.getPaymentInfo(this.userid).subscribe( data => {
      this.firstname = data.userpayment.firstname;
      this.lastname = data.userpayment.lastname;
      this.address = data.userpayment.address;
      this.city = data.userpayment.city;
      this.state = data.userpayment.state;
      this.card = data.userpayment.card;
      this.cardtype = data.userpayment.cardType;
      this.cardnum = data.userpayment.cardNum;
      this.id = data.userpayment._id;
    });
  }

  enable(fieldEnable, fieldCancel, fieldUpdate, inputId) {
    document.getElementById(fieldEnable).classList.add('pause-fade-in');
    document.getElementById(fieldCancel).classList.remove('pause-fade-in');
    document.getElementById(fieldUpdate).classList.remove('pause-fade-in');
    document.getElementById(inputId).classList.add('enabled');
  }

  cancel(fieldCancel, fieldUpdate, fieldEnable, inputId){
    document.getElementById(fieldCancel).classList.add('pause-fade-in');
    document.getElementById(fieldUpdate).classList.add('pause-fade-in');
    document.getElementById(fieldEnable).classList.remove('pause-fade-in');
    document.getElementById(inputId).classList.remove('enabled');
  }

  update(fieldCancel, fieldUpdate, fieldEnable, inputId) {
    document.getElementById(fieldCancel).classList.add('pause-fade-in');
    document.getElementById(fieldUpdate).classList.add('pause-fade-in');
    document.getElementById(fieldEnable).classList.remove('pause-fade-in');
    document.getElementById(inputId).classList.remove('enabled');
  }

  enableFirstName() {
    this.disableFirstName = false;
    this.enable('firstname-enable', 'firstname-cancel', 'firstname-update', 'firstname');
  }

  enableLastName() {
    this.disableLastName = false;
    this.enable('lastname-enable', 'lastname-cancel', 'lastname-update', 'lastname');
  }

  enableAddress() {
    this.disableAddress = false;
    this.enable('address-enable', 'address-cancel', 'address-update', 'address');
  }

  enableCity() {
    this.disableCity = false;
    this.enable('city-enable', 'city-cancel', 'city-update', 'city');
  }

  enableState() {
    this.disableState = false;
    this.enable('state-enable', 'state-cancel', 'state-update', 'state');
  }

  enableCard() {
    this.disableCard = false;
    this.enable('card-enable', 'card-cancel', 'card-update', 'card');
  }

  enableCardType() {
    this.disableCardType = false;
    this.enable('cardtype-enable', 'cardtype-cancel', 'cardtype-update', 'cardtype');
  }

  enableCardNum() {
    this.disableCardNum = false;
    this.enable('cardnum-enable', 'cardnum-cancel', 'cardnum-update', 'cardnum');
  }

  cancelFirstNameUpdate() {
    this.disableFirstName = true;
    this.cancel('firstname-cancel', 'firstname-update', 'firstname-enable', 'firstname');
  }

  cancelLastNameUpdate() {
    this.disableLastName = true;
    this.cancel('lastname-cancel', 'lastname-update', 'lastname-enable', 'lastname');
  }

  cancelAddressUpdate() {
    this.disableAddress = true;
    this.cancel('address-cancel', 'address-update', 'address-enable', 'address');
  }

  cancelCityUpdate() {
    this.disableCity = true;
    this.cancel('city-cancel', 'city-update', 'city-enable', 'city');
  }

  cancelStateUpdate() {
    this.disableState = true;
    this.cancel('state-cancel', 'state-update', 'state-enable', 'state');
  }

  cancelCardUpdate() {
    this.disableCard = true;
    this.cancel('card-cancel', 'card-update', 'card-enable', 'card');
  }

  cancelCardTypeUpdate() {
    this.disableCardType = true;
    this.cancel('cardtype-cancel', 'cardtype-update', 'cardtype-enable', 'cardtype');
  }

  cancelCardNumUpdate() {
    this.disableCardNum = true;
    this.cancel('cardnum-cancel', 'cardnum-update', 'cardnum-enable', 'cardnum');
  }

  updateFirstName () {
    const info = {
      id: this.id,
      firstname: this.firstname
    };
    
    this.rps.updatePaymentFirstName(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('firstname-cancel', 'firstname-update', 'firstname-enable', 'firstname');
    });
  }

  updateLastName () {
    const info = {
      id: this.id,
      lastname: this.lastname
    };
    
    this.rps.updatePaymenLastName(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('lastname-cancel', 'lastname-update', 'lastname-enable', 'lastname');
    });
  }

  updateAddress () {
    const info = {
      id: this.id,
      address: this.address
    };
    
    this.rps.updatePaymenAddress(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('address-cancel', 'address-update', 'address-enable', 'address');
    });
  }

  updateCity () {
    const info = {
      id: this.id,
      city: this.city
    };
    
    this.rps.updatePaymenCity(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('city-cancel', 'city-update', 'city-enable', 'cityname');
    });
  }

  updateState () {
    const info = {
      id: this.id,
      state: this.state
    };
    
    this.rps.updatePaymenLastName(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('state-cancel', 'state-update', 'state-enable', 'state');
    });
  }

  updateCard () {
    const info = {
      id: this.id,
      card: this.card
    };
    
    this.rps.updatePaymenCard(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('card-cancel', 'card-update', 'card-enable', 'card');
    });
  }

  updateCardType () {
    const info = {
      id: this.id,
      cardtype: this.cardtype
    };
    
    this.rps.updatePaymenCardType(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('cardtype-cancel', 'cardtype-update', 'cardtype-enable', 'cardtype');
    });
  }

  updateCardNum () {
    const info = {
      id: this.id,
      cardnum: this.cardnum
    };
    
    this.rps.updatePaymenCardNum(info).subscribe( data => {
      console.log('your changes were saved ', data);
      this.update('cardnum-cancel', 'cardnum-update', 'cardnum-enable', 'cardnum');
    });
  }

}
