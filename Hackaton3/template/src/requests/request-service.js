import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';
import { toSingleMovieView } from '../views/movie-views.js';

export const loadCategories = () => {
  return getCategories();
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);
  return category;
};

export const loadMovies = (categoryId = null) => {
  const movies = getMoviesGeneralInfo(categoryId)
  return movies;
};

export const loadSingleMovie = (id) => {
  const movie = toSingleMovieView(getMovieById(id))
  return movie;
};

export const loadSearchMovies = (searchTerm = '') => {
  return searchMovies(searchTerm);
};
