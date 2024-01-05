import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
<!-- your template here, you can use toMovieDetailed(movie) -->
<div class="moviw">
  <h2>${movie.title}</h2>
  <div>
    <div> <img src="${movie.poster}" alt="${movie.title} cover photo" width="40" height="60"> 
    </div>
  
    </div> 
    <p> Genre: ${movie.genre}</p>
    <p> director: ${movie.director}</p>
    <p> stars: ${movie.stars}</p>
    <p> description: ${movie.description}</p>
    <div>
  
  
  </div>
</div>
`;

export const toMovieSimple = (movie) => `
<!-- your template here -->
<div>
<h2>${movie.title}</h2>
<p>${movie.year}</p>
<img src="${movie.poster}" alt="${movie.title} cover photo" width="40" height="60"> 
<br>
<button  class="button-view-details">view details</button> 
<button  id="${movie.id}" class= 'favourites-btn' >add fav</button> 
<span class = 'view-fav' id="${movie.id}"> movieview </span>
</div> 
`;


const toMovieDetailed = (movie) => `
<div>
<h2>${movie.title}</h2>
<p>${movie.year}</p>
<img src="${movie.poster}" alt="${movie.title} cover photo" width="40" height="60"> 
</div>
`;
