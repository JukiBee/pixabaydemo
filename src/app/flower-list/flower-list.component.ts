import { Component, OnInit } from '@angular/core';
import { HttpUtilsService } from '../http-utils.service';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit {
data:string ="";
API_KEY = '27966461-78af52d95ba96e9b393b55880';
URL = "https://pixabay.com/api/?key="+this.API_KEY+"&q="+encodeURIComponent('red roses');
searchResult:any =[];
  constructor(private http: HttpUtilsService) { }

  ngOnInit(): void {

  }

  getImage(text:any){
    console.log(this.URL);
    if(text){
      this.getsearch(text);
    }
    console.log();
  }

  getsearch(text:any) {
    console.log(text);
    return this.http.get("https://pixabay.com/api/?key="+this.API_KEY+"&q="+encodeURIComponent(text)).subscribe(response=>{
      this.searchResult = response.hits;
      console.log(this.searchResult);
    });
  }

}
