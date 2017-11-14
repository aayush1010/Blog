import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private request: LoginService, private router: Router) { }
  users : Object[];
  show : boolean = false;
  lognotsuccess : boolean = false;
  ngOnInit() {
    this.request.loadData()
      .subscribe((data) => {
        this.users = data;
      })
  }
  addUser(username, password) {
    let newuser = {
      username: username,
      password : password
    };
    this.request.postData(newuser)
      .subscribe(data => {
        this.users.push(data);
      });
    this.show = true;
  }
  checkLogin(username, password) {
    this.request.LoginAccess(username, password)
      .subscribe(data=> {
        if(data.id == null){
          console.log('login fail');
          this.lognotsuccess = true;
          username = '';
          password = '';
          this.router.navigateByUrl('/login');
        } else {
          console.log('login success');
          this.router.navigateByUrl('/home');
        }
      });
  }
}
