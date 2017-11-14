import {Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {BloglistService} from "../bloglist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-blog',
  templateUrl: './add-new-blog.component.html',
  styleUrls: ['./add-new-blog.component.css'],
})
export class AddNewBlogComponent implements OnInit {
  //@Output() addcurrentBlog:  EventEmitter<Object>= new EventEmitter<Object>();
  blogs : Object[];
  constructor(private request: BloglistService, private router: Router){ }
  ngOnInit(){
    this.request.loadData()
      .subscribe((data) => {
        this.blogs = data;
      })
  }

  addBlog(name, desc, tag, blogC) {
    let blog = {
      name: name,
      desc: desc,
      tag : tag,
      blogC: blogC
    };
    console.log(tag);
  //  this.addcurrentBlog.emit(blog);
    this.request.postData(blog)
      .subscribe(data => {
        this.blogs.push(data);
      });
    location.href = "home";
  }
}
