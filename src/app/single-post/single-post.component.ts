import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchGetService } from '../services/search-get.service';
import { PositionsService } from '../services/positions.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
applyForm: FormGroup;
position = [];
email: String;
file: String;



  constructor(private route: ActivatedRoute, private sgs: SearchGetService, private fb: FormBuilder, private ps: PositionsService) {}

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => {
      this.displayPosition(params['id']);
    });
  }

  createForm() {
    this.applyForm = this.fb.group({
      file: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  displayPosition(id) {
    this.sgs.getPosition(id).subscribe( data => {
      this.position.push(data.position);
      this.email = this.position[0].email;
    });
  }

  applyToJob() {
    const info = {
      firstname: this.applyForm.get('firstname').value,
      lastname: this.applyForm.get('lastname').value,
      email: this.applyForm.get('email').value,
      message: this.applyForm.get('message').value,
      file: this.file
    };

    this.ps.applyToPosition(info).subscribe( data => {
      console.log(data);
      this.applyForm.reset();
    });
  }

  inputChange(e) {
    this.file = e.target.value;
  }

}
