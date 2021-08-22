import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ArticleComponent } from './article/article.component';

// Routing module to keep routing organized and separed from the app module
const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'article/:title', component: ArticleComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }