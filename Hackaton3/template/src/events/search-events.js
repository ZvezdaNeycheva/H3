

import {searchMovies} from '../data/movies.js'
import {toSearchView} from '../views/search-view.js'
 


export const renderSearchItems = (searchTerm) => {
  // missing implementation

       if(searchMovies(searchTerm)){
    return document.getElementById('container').innerHTML = toSearchView(searchMovies(searchTerm), searchTerm)
   }
};
