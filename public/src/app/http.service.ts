import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createResturant(newrest){
    return this._http.post('/resturant', newrest);
  }

  getAllResturants(){
    return this._http.get('/resturant');
  }

  deleteThisResturant(id){
    console.log("This is the id",id)
    return this._http.delete('/resturant/' + id);
  }

  findThisResturant(id){
    return this._http.get('/find/' + id);
  }

  findTheseReviews(id){
    return this._http.get('/review/' + id);
  }

  updateThisResturant(updateRest){
    return this._http.put('/resturant/' + updateRest._id, updateRest)
  }

  createReview(newReview, id){
    console.log("Service", id)
    return this._http.post('/review/' + id, newReview)
  }
}
