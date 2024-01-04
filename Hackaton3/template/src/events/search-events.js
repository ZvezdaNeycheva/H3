

import {searchMovies} from '../data/movies.js'
import {toSearchView} from '../views/search-view.js'
 


export const renderSearchItems = (searchTerm) => {
  // missing implementation

  let searchTerm2 = searchTerm.toUpperCase();


       if(searchMovies(searchTerm2)){
    return document.getElementById('container').innerHTML = toSearchView(searchMovies(searchTerm2), searchTerm)
   }
};
