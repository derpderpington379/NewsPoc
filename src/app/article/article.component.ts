import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../service/headline.service';
import { Article } from '../interface/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public article: Article | undefined;

  constructor(private headlineService: HeadlineService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Fetches the title parameter from the url
    this.route.params.subscribe(params => {
      this.getArticleByTitle(params['title']);
    });
  }

  // Get article by title
  getArticleByTitle(title: string) {
    // There is no unique identifier(id) available, at least not in the free version.
    return this.headlineService.getHeadlines()
      .subscribe(data => {
        this.article = data.articles.find(x => x.title == title);
      });
  }
}
