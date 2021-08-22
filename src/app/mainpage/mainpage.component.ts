import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../service/headline.service';
import { Article } from '../interface/article';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  articles!: Article[];

  constructor(private headlineService: HeadlineService) { }

  ngOnInit(): void {
    // Load all current headline articles
    this.getAllHeadlines();
  }

  // Get all current headline articles 
  getAllHeadlines() {
    return this.headlineService.getHeadlines()
      .subscribe(data => {
        this.articles = data.articles;
      });
  }
}
