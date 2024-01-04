import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

export const loadCategories = () => {
  // missing implementation
  const categories = getCategories()
  return categories;
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  // missing implementation
  const movies = getMoviesGeneralInfo(categoryId)
  return movies
  
};

export const loadSingleMovie = (id) => {
  // missing implementation
  const movie = getMovieById(id)
  return movie
};

export const loadSearchMovies = (searchTerm = '') => {
  // missing implementation
  return searchMovies(searchTerm)
};
