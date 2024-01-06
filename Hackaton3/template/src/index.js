import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderCategory, renderMovieDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // show category events
    if (event.target.classList.contains('btnn')) {
      renderCategory(+event.target.getAttribute('id'));
    }

    // show movie events
    if (event.target.classList.contains('button-view-details')) {
      renderMovieDetails(+event.target.getAttribute('attr-view-details'));
    }

    // toggle favorite event
    if (event.target.classList.contains('view-fav')) {
      toggleFavoriteStatus(+event.target.getAttribute('id')); 
    }
    // if (event.target.classList.contains('favorite')) {
    //   toggleFavoriteStatus(+event.target.getAttribute('data-movie-id')); 
    // }
  })

  // search events
  q('input#search').addEventListener('input', event => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);



});
