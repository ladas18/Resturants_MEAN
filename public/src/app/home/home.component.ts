import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resturants: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit(){
  this.getResturants();
  }

  getResturants(){
    let observable = this._httpService.getAllResturants();
    observable.subscribe((resturants) => {
      console.log(resturants)
      this.resturants = resturants;
    });
  }

  deleteResturant(id){
    let observable = this._httpService.deleteThisResturant(id);
    observable.subscribe((resturant) => {
    this.getResturants();
    });
  }
}