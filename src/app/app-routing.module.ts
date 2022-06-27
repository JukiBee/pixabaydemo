import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlowerListComponent } from './flower-list/flower-list.component';

const routes: Routes = [
  {path:'flowerlist', component:FlowerListComponent, data: { label: 'flower', title: 'flower'}},
  {path: 'flower', component: AppComponent, data: { label: 'login', title: 'login' } },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
