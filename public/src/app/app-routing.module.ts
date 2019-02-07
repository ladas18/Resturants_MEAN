import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddreviewComponent } from './addreview/addreview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'resturants' },
  { path: 'resturants', component: HomeComponent },
  { path: 'resturants/new', component: CreateComponent },
  { path: 'resturants/:id/edit', component: UpdateComponent },
  { path: 'resturants/:id', component: ReviewsComponent},
  { path: 'resturants/:id/review', component: AddreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
