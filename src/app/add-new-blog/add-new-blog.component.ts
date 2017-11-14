import {Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {BloglistService} from "../bloglist.service";
import {Router} from "@angular/router";
import {LoginComponentComponent} from "../login-component/login-component.component";


@Component({
  selector: 'app-add-new-blog',
  templateUrl: './add-new-blog.component.html',
  styleUrls: ['./add-new-blog.component.css'],
  providers: [LoginComponentComponent]
})
export class AddNewBlogComponent implements OnInit {
  //@Output() addcurrentBlog:  EventEmitter<Object>= new EventEmitter<Object>();
  blogs : Object[];
  constructor(private request: BloglistService, private router: Router, private login: LoginComponentComponent){ }
  ngOnInit(){
    this.request.loadData()
      .subscribe((data) => {
        this.blogs = data;
        console.log(this.login.sendData);
      })
  }

  addBlog(name, desc, tag, blogC) {
    var data=localStorage.getItem('logindata');
    let userid = JSON.parse(data).loginnedId;
    console.log(userid);
    // let userid =  this.login.loginUserId;
    let blog = {
      name: name,
      desc: desc,
      tag : tag,
      blogC: blogC,
      userId : userid
    };
    console.log(tag);
    console.log(userid);
  //  this.addcurrentBlog.emit(blog);
    this.request.postData(blog)
      .subscribe(data => {
        console.log(data);
        this.blogs.push(data);
      });
    location.href = "home";
  }
}
