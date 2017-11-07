import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateResume() {
    console.log('update resume');
  }

  deleteResume() {
    console.log('delete resume');
  }

}
