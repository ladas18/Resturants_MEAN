import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  updateRest: any
  error: any

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
      this.updateRest = {name: '', cuisine: ''}
    })
    var id = this.id
    console.log("Usable id", id)
    this.findResturant(id);
  }

  editResturant(updateRest, e){
    let observable = this._httpService.updateThisResturant(updateRest);
    observable.subscribe(data => {
      if (data['error'] != undefined) {
        this.error = data['error']
      }
      else{
        this._router.navigate(['/resturants']);
      }
  })
}

  findResturant(id){
    let observable = this._httpService.findThisResturant(id);
    observable.subscribe(data => {
    console.log("What is data below")
    console.log(data);
    this.updateRest = data;
    });
}





}
