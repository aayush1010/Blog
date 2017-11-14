import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {BloglistService} from "../bloglist.service";
import {IBlogInterface} from "../blog-list/blog.Interface";


@Component({
  selector: 'app-filtered-list-by-tags',
  templateUrl: './filtered-list-by-tags.component.html',
  styleUrls: ['./filtered-list-by-tags.component.css']
})
export class FilteredListByTagsComponent implements OnInit {
  private tag;
  blogs : IBlogInterface[];
  constructor(private route: ActivatedRoute,
              private router: Router, private blogListService: BloglistService) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.tag = params;
    });
    console.log(this.tag.tag);
    this.blogListService.filterData(this.tag.tag.toUpperCase())
      .subscribe((data)=>{
        this.blogs = data;
        console.log(this.blogs);
      })
  }


 }
