import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchGetService } from '../services/search-get.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
seaResultsForm: FormGroup;
positions = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private sgs: SearchGetService) {
    this.createForm();
   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params['search'] !== '' && params['city'] !== '' && params['state'] !== '') {
        this.getRootSearch(params['search'], params['city'], params['state']);
        this.positions.length = 0;
      } else {
        console.log('no params');
      }
    });
  }

  createForm() {
    this.seaResultsForm = this.fb.group({
      search: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

   getRootSearch(search, city, state) {
    this.sgs.getSearch(search, city, state).subscribe( data => {
      data.positions.map( (item) => {
        this.positions.push({
          title: item.title,
          description: item.description.substring(0, 400),
          eName: item.eName,
          eCreatedAtPos: item.eCreatedAtPos,
          _id: item._id
        });
      });
    });
  }

  posSearchResults() {
    const search = {
      search: this.seaResultsForm.get('search').value,
      city: this.seaResultsForm.get('city').value,
      state: this.seaResultsForm.get('state').value
    };

    if ( search.search !== '' && search.city !== '' && search.state !== '') {
      this.router.navigate(['/search', search.search, search.city, search.state]);
      this.seaResultsForm.reset();
    } else {
      alert('type something');
    }
  }

}
