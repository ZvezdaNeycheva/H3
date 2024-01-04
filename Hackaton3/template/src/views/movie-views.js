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
<div id="category">
  <h2>${category.name} movies:</h2>
  <div class="content">
  ${movie.title}
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
<button id="button-view-category">view details</button> 
</div> 
`;


const toMovieDetailed = (movie) => `
<!-- your template here -->
`;
