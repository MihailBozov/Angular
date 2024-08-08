import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/types/post';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  apiUrl: string = environment.apiUrl;
  isLoading: boolean = true;
  posts: Post[] = [];
  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    })
  }
  

}
