import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  Signupusers: any[] = []

  SignUpObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    email: '',
    password: ''
  }

  constructor(){}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupuser');

    if(localData!==null){
      this.Signupusers = JSON.parse(localData);
    }
  }

  onSignup(){
    const localData = localStorage.getItem('signupuser')

    if(localData!==null){
      this.Signupusers = JSON.parse(localData);
    }

    const username = this.SignUpObj.userName;

    if(this.Signupusers.some(user => user.userName === username)){
      alert("User already exists");
      return;
    }

    this.Signupusers.push(this.SignUpObj);
    localStorage.setItem('signupuser',JSON.stringify(this.Signupusers));
    alert('Signup successfull please login');
    this.SignUpObj = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onLogin(){

    const isUserExist = this.Signupusers.find(m => m.email === this.loginObj);

    if(isUserExist !== undefined){
      alert('User login success')
      this.loginObj = {
        email: '',
        password: ''
      }
    }else{
      alert('error while login')
      this.loginObj = {
        email: '',
        password: ''
      }
    }
  }
}
