import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rsgisterMode:boolean=false
  // values:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // this.getValues()
  }

  registerToggle(){
    this.rsgisterMode = true;
  }

  // getValues(){
  //   this.http.get('http://localhost:5000/api/values').subscribe(
  //     Response=>{this.values=Response;} ,
  //     error=>{console.log(error);}
  //   )
  // }

  cancelRegister(mode:boolean){
    this.rsgisterMode = mode;

  }
}
