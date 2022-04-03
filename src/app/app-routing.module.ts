import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateTimeComponent } from './date-time/date-time.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"date-time",component:DateTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
