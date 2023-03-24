import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShivaSax';

  firstName:any;
  FContact:any;
  FselectBank:any;
  mainUPI:any;
  tempID:any;
  tempAlert:boolean = false;
  time:any;

  private tempURL = 'https://ajay-bbdd1-default-rtdb.firebaseio.com/Shiva.json';

  constructor(private _http:HttpClient){}

  ngOnInit(){
    var mainRandom = Math.floor(Math.random() * (2500 - 5500) ) + 118987987465 ;
    this.tempID = mainRandom;
  }


  temp() {
    this._http.post(this.tempURL,{
      Name: this.firstName,
      Contact: this.FContact,
      Bank: this.FselectBank,
      UPI: this.mainUPI,
    })
    .subscribe(res=>{
      console.log(res);
      this.tempAlert = true;
    })
  }



}
