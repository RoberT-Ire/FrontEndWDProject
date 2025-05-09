import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SearchPage } from './search/search.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'search', component: SearchPage }
];