import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../shared/services/json.service';
import { Post } from '../../shared/models/post';
import { SeoService } from '../../shared/services/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  posts: Post[] = [];

  constructor(private json: JsonService, private seo: SeoService, private title: Title) {
    this.seo.addSEO();
    this.title.setTitle(`Prueba Api | Integriapp S.A. de C.V.`);
  }

  ngOnInit(): void {

    this.json.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });

  }

}
