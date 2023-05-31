import { Component, OnInit, Inject, Input } from '@angular/core';
import { servicePost } from 'src/services/servicePost';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

@Input()
  postId:any;
  commentsByPost: any;
  constructor(
    private servicePost: servicePost
  ) { }


  ngOnInit() {
    console.log("id post en comment", this.postId);
    this.servicePost.getComentByPostId(this.postId).subscribe((res) => {
      this.commentsByPost  = res;
      console.log(" sus comentarios por post",this.commentsByPost );
    });
  }

}
