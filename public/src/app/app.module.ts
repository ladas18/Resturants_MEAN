import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddreviewComponent } from './addreview/addreview.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    HomeComponent,
    ReviewsComponent,
    AddreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
