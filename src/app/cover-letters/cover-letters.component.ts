import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-letters',
  templateUrl: './cover-letters.component.html',
  styleUrls: ['./cover-letters.component.css']
})
export class CoverLettersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateCoverLetter() {
    console.log('update cover letter');
  }

  deleteCoverLetter() {
    console.log('delete cover letter');
  }
}
