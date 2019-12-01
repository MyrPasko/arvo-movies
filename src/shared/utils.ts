import { GenreType, MoviesList, SearchResult, SingleMovie, SortConfigParam, SortConfigValue } from './types';
import data from './data';

export const getMoviesListHelper = (): Promise<MoviesList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  })
};

export class FilterByConfig {
  data: MoviesList;
  sortConfig: SortConfigParam;

  constructor(data: MoviesList, sortConfig: SortConfigParam) {
    this.data = data;
    this.sortConfig = sortConfig;
  }

  sortByGenre() {
    const genre = this.sortConfig.movieGenre;

    this.data = this.data.filter((movie: SingleMovie) => {
      return genre ? movie.genres.includes(genre) : true;
    });

    return this;
  }

  sortBySearchParam() {
    const searchParam = this.sortConfig.searchParam;

    this.data = this.data.filter((movie: SingleMovie) => {
      return searchParam ? movie.name.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1 : true;

    });

    return this.data;
  }
}
