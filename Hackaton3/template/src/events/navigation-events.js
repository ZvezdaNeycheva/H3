import { CATEGORIES, CONTAINER_SELECTOR, HOME , FAVORITES, ABOUT} from '../common/constants.js';
import { loadCategories, loadCategory, loadMovies, loadSingleMovie, loadSearchMovies } from '../requests/request-service.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';

import {toCategoriesView} from '../views/category-view.js'
import {toAboutView} from '../views/about-view.js'
import {toFavoritesView} from '../views/favorites-view.js'
import {getFavorites} from '../data/favorites.js'
// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

      // missing partial implementation
      case CATEGORIES:
        setActiveNav(CATEGORIES);
        return renderCategories();

        case FAVORITES:
          setActiveNav(FAVORITES);
          return renderFavorites();
      
          case ABOUT:
          setActiveNav(ABOUT);
          return renderAbout();
    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  const info = loadMovies(id);
  q(CONTAINER_SELECTOR).innerHTML = toMovieSimple(info);
};

// export const renderCategory = (categoryId = null) => {
//   // missing partial implementation
// //-----------------------
// //if category id == categoryId display only that category
// // loadCategory
// q(CONTAINER_SELECTOR).innerHTML = loadCategory(categoryId)// returns 'Action' or 'Comedy' or ...
// // to render smth:



// };
export const renderCategory = (categoryId = null) => {
  const category = getCategory(categoryId);
  const movies = loadMovies(categoryId)
  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  // missing implementation
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(loadCategories())
};

const renderFavorites = () => {
  // missing implementation
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView()
};

const renderAbout = () => {
  // missing implementation
  q(CONTAINER_SELECTOR).innerHTML = toAboutView()
};