import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesFromRegister:any
  @Output() cancelRegister = new EventEmitter();
  model:any={}
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.model)
    this.authservice.register(this.model).subscribe(
      ()=>{console.log('تم الاشتراك بنجاح')} ,
      error=>{console.log(error)}
      )

  }

  cancel(){
    this.cancelRegister.emit(false)
    console.log('تم الالغاء')

  }


}
