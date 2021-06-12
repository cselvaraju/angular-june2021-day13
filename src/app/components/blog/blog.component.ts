import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  isLoadingData: boolean = false;
  outputMessage: string = 'No data yet!!';

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  getDataFromServer() {
    this.posts = [];
    this.isLoadingData = true;
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.reverse();
        this.isLoadingData = false;
      },
      error: (error) => {
        console.log('Error occured', error);
        this.isLoadingData = false;
        this.outputMessage = `Server says: ${error.statusText} URL: ${error.url}`;
      }
    });
  }

  addPost(userid: string, title: string, body: string) {
    const newPost: Post = {
      userId: parseInt(userid),
      title: title,
      body: body,
      id: -1,
    };

    this.postService
      .createPost(newPost)
      .subscribe((post) => this.posts.unshift(post));
  }
}
