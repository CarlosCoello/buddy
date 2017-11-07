import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { SearchGetService } from '../services/search-get.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posSearchForm: FormGroup;
positions = [];
message: String;
messageClass: String;
showMessage = false;

  constructor(private fb: FormBuilder, private sgs: SearchGetService, private router: Router, private route: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() {}

  createForm() {
   this.posSearchForm = this.fb.group({
     search: ['', Validators.required],
     city: ['', Validators.required],
     state: ['', Validators.required]
   });
  }

  posSearch() {
    const search = {
      search: this.posSearchForm.get('search').value,
      city: this.posSearchForm.get('city').value,
      state: this.posSearchForm.get('state').value
    };

    if ( search.search !== '' && search.city !== '' && search.state !== ''  ) {
      this.router.navigate(['/search', search.search, search.city, search.state]);
      this.posSearchForm.reset();
    } else {
      this.message = 'all fields are required';
      this.messageClass = 'alert alert-danger';
      this.showMessage = true;
      setTimeout( () => {
        this.showMessage = false;
      }, 1500);
    }
  }

}
