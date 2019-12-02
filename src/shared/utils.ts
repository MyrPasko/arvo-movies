import { GenreType, MoviesList, SingleMovie } from './types';
import data from './data';
import { SortConfigState } from '../store/sortConfig/types';

export const getMoviesListHelper = (): Promise<MoviesList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  })
};

export class FilterByConfig {
  data: MoviesList;
  sortConfig: SortConfigState;

  constructor(data: MoviesList, sortConfig: SortConfigState) {
    this.data = data;
    this.sortConfig = sortConfig;
  }

  sortByGenre() {
    const genre = this.sortConfig.movieGenre;

    this.data = this.data.filter((movie: SingleMovie) => {
      return genre ? movie.genres.includes(<GenreType>genre) : true;
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
