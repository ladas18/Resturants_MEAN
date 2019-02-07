import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  id: any;
  newReview: any;
  error: any;
  resturant: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
    this.id = params['id']
    this.newReview = {name: "", star: null, review: ""};
    this.resturant = {name: '', cuisine: ''}
    this.error = ''
  }); 
  var id = this.id
  console.log("This.id,", this.id)
  console.log("Usable id", id)
  this.findResturant(this.id)
  }
  
  addReview(newReview){
    let observable = this._httpService.createReview(this.newReview, this.id);
    observable.subscribe(data => {
      this.error = data
    });
  }

  findResturant(id){
    let observable = this._httpService.findThisResturant(id);
    observable.subscribe(data => {
    console.log("What is data below")
    console.log(data);
    this.resturant = data;
    });
  }

}
