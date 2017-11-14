import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {BlogListComponent} from "./blog-list/blog-list.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  currentBlog :Object;
  searchedTag : string;
  title: string = 'My Blog App';
  filterByList: string[] = ["MyBlogs", "Technology", "Science","Food",  "Sports","Cars"];
  constructor(private router: Router){}
 //@ViewChild(BlogListComponent) private child: BlogListComponent;
  //filterByTags(listitem: string){
   // console.log(listitem);
  //}
}
