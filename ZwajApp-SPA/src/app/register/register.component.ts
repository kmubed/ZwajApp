import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesFromRegister:any
  @Output() cancelRegister = new EventEmitter();
  model:any={}
  constructor(private authservice:AuthService , private alertify:AlertifyService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.model)
    this.authservice.register(this.model).subscribe(
      ()=>{this.alertify.success('تم الاشتراك بنجاح')} ,
      error=>{this.alertify.error(error)}
      )

  }

  cancel(){
    this.cancelRegister.emit(false)
    console.log('تم الالغاء')

  }


}
