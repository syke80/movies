import angular from 'angular';

import movieListComponent from './movieList.component';
import movieSearchComponent from './movieSearch.component';

export default angular.module('app.components', [])
  .component('movieSearch', movieSearchComponent)
  .component('movieList', movieListComponent);
