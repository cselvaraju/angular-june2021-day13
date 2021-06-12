import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { HttpHeaders } from "@angular/common/http";

import { Post } from "../models/post.model";

const URL = 'https://jsonplaceholder.typicode.com';

const httpOptions = {
  headers: new HttpHeaders(
    {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${URL}/posts`, httpOptions);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${URL}/posts`, post, httpOptions);
  }

}
