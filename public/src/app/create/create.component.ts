import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newrest: any;
  error: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newrest = {name: "", cuisine: ""};
    this.error = ''
  }

  addResturant(){
    console.log("Entered addResturant")
    let observable = this._httpService.createResturant(this.newrest);
    observable.subscribe(data => {
      console.log("This is the error", data)
      if (data != undefined) {
        this.error = data
      }
      else{
        this._router.navigate(['/resturants']);
      }
    })
  }

}
