import { Component } from '@angular/core';
import { HttpUtilsService } from './http-utils.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string = "";
  API_KEY = '27966461-78af52d95ba96e9b393b55880';
  URL = "https://pixabay.com/api/?key="+this.API_KEY+"&q="+encodeURIComponent('red roses');

  constructor( private http: HttpUtilsService) {}

  getImage() {
    console.log(this.getJobType());
 
  //   this.imageService.getData('https://picsum.photos/200/300/?random')
  //     .subscribe(
  //       imgData => this.data = imgData,
  //       err => console.log(err)
  //     );
  // }
  }

  getJobType() {
    return this.http.get(this.URL);
  }
  
}
