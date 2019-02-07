import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  id: any;
  reviews: any;
  resturant: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
      console.log("This.id,", this.id)
      this.resturant = {name: '', cuisine: ''}
    })
    var id = this.id
    console.log("Usable id", id)
    this.getReviews(id);
  }

  getReviews(id){
    let observable = this._httpService.findTheseReviews(id);
    observable.subscribe(data => {
    console.log("What is data below")
    console.log(data);
    this.reviews = data;
    console.log(this.reviews)
    })
}

}
