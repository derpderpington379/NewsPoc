import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Headline } from '../interface/headline';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  // News API to get the latest headlines from the biggest American news sources. 
  private newsApi: string = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
  // API key
  private apiKey: string = "7e369596227f47b3aa43fc783d7b661f"

  constructor(private http: HttpClient) { }

  // Retrieves current headlines from newsapi.org
  getHeadlines(): Observable<Headline> {
    return this.http.get<Headline>(this.newsApi + this.apiKey)
  }
}
