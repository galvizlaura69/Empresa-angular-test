import { Component, OnInit, Inject, Input } from '@angular/core';
import { servicePost } from 'src/services/servicePost';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

@Input()
userId:any = 0;
listPost: any;
  constructor(
    private servicePost: servicePost
  ) { }


  ngOnInit() {
    this.servicePost.getPostByUserId(this.userId).subscribe((res) => {
      this.listPost = res;
    });
  }

}
