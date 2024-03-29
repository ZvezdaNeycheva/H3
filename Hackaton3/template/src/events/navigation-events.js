import { CATEGORIES, CONTAINER_SELECTOR, HOME , FAVORITES, ABOUT} from '../common/constants.js';
import { loadCategories, loadCategory, loadMovies, loadSingleMovie, loadSearchMovies } from '../requests/request-service.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView, toSingleMovieView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';

import {toCategoriesView} from '../views/category-view.js'
import {toAboutView} from '../views/about-view.js'
import {toFavoritesView} from '../views/favorites-view.js'
import {getFavorites} from '../data/favorites.js'
import {getCategory, getMovieById} from '../data/movies.js'
import {toggleFavoriteStatus, renderFavoriteStatus} from './favorites-events.js'


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
  // const info = getMovieById(id);
  // q(CONTAINER_SELECTOR).innerHTML = loadSingleMovie(getMovieById(info));

  const movie = loadSingleMovie(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
};

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
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(loadCategories())
};

const renderFavorites = () => {
  // missing implementation
const favs = getFavorites()
const favMovies = favs.map(fav => loadSingleMovie(fav))

  if (getFavorites()) {
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favMovies)
  }
  
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView()
};
