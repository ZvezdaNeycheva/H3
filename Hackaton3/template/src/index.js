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
    if (event.target.classList.contains('button-view-category')) {
      renderCategory(+event.target.getAttribute('category.name'));
    }

    // show movie events
    if (event.target.classList.contains(/* your button class here */)) {
      renderMovieDetails(+event.target.getAttribute(/* your correct data attribute here */));
    }

    // toggle favorite event
    if (event.target.classList.contains(/* favorites item class here */)) {
      toggleFavoriteStatus(+event.target.getAttribute(/* your correct data attribute here */));
    }

  });import { HOME } from './common/constants.js';
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
        renderMovieDetails(+event.target.getAttribute('id'));
      }
  
      // toggle favorite event
      if (event.target.classList.contains('favourites-btn')) {
        toggleFavoriteStatus(+event.target.getAttribute('id'));
      }
  
    });
  
    // search events
    q('input#search').addEventListener('input', event => {
      renderSearchItems(event.target.value);
    });
  
    loadPage(HOME);
  
  
  
  });
  
  

  // search events
  q('input#search').addEventListener('input', event => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);



});

import {categories} from '../src/data/movies-data.js'
function compare(param1) {
  if (param1 === categories.name) {
    return document.getElementById('container').innerHTML = 
    `
    <div class="category-action">
    <button id="button-single-movie">${movies.title}</button>
      <p> ${movies.year}</p>
      <img src="" alt="${movies.title} cover picture" width="50" height="60">  
    </div> 
    `
  }
}
// q('button-view-category').addEventListener('click', compare(event.target.getAttribute(category.name)))
// q('button-view-category').addEventListener('click', event.target.getAttribute(category.name).map(e=>compare(e)))
q('button-view-category').addEventListener('click', (event)=> event.target.getAttribute(category.name).map(e=>compare(e)))


