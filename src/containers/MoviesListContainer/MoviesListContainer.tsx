import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';
import './probe.css';
import { RootState } from '../../store/rootTypes';
import * as moviesListActions from '../../store/moviesList/actions';
import * as sortConfigActions from '../../store/sortConfig/actions';
import { getMoviesListHelper } from "../../shared/utils";
import { MoviesList, MoviesListViewType, SingleMovie, SortConfigParam } from "../../shared/types";

interface OwnProps {
}

type MoviesListProps = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

type MoviesListState = Readonly<{
  shouldRedirect: Boolean,
  listOfGenres: Array<string>,
}>;

class MoviesListContainer extends PureComponent<MoviesListProps, MoviesListState> {
  readonly state: MoviesListState = {
    shouldRedirect: false,
    listOfGenres: [],
  };

  // goToSingleHandler = () => {
  //   console.log('[We go to single]');
  //   this.setState({ shouldRedirect: true });
  // };

  buildGenresList = (movies: MoviesList) => {
    const setOfGenres: Set<string> = new Set();
    let listOfGenres: Array<string> = [];

    movies.forEach((movie: SingleMovie): void => {
      movie.genres.reduce((set, val) => set.add(val), setOfGenres);
    });
    listOfGenres = Array.from(setOfGenres.values());
    this.setState({ listOfGenres });
  };

  getMoviesList = async () => {
    const {
      onSetListMoviesStart,
      onSetListMoviesSuccess,
      onSetListMoviesFailed,
    } = this.props;

    onSetListMoviesStart();
    try {
      const movies = await getMoviesListHelper();
      movies.sort((a, b) => {
        return Number(b.rate) - Number(a.rate);
      });

      onSetListMoviesSuccess(movies);
      this.buildGenresList(movies);
    } catch (e) {
      onSetListMoviesFailed()
    }
  };

  selectChangeViewHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChangeViewType, sortConfig } = this.props;
    const value = e.currentTarget.value;
    const previousView = sortConfig && sortConfig.viewType;

    if (previousView !== value) {
      onChangeViewType({ viewType: value });
    }
  };

  selectChangeGenreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChangeViewType } = this.props;
    const value = e.currentTarget.value;

    onChangeViewType({ movieGenre: value });
  };

  searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChangeViewType } = this.props;
    const value = e.currentTarget.value;

    onChangeViewType({ searchParam: value });
  };

  componentDidMount(): void {
    this.getMoviesList();
  }

  render() {
    const { shouldRedirect, listOfGenres } = this.state;
    const { loading, error, sortConfig } = this.props;
    const { viewType, movieGenre, searchParam } = this.props.sortConfig;

    console.log('[SingleMovie]', this.props.singleMovie);
    console.log('[loading]', this.props.loading);

    if (shouldRedirect) {
      return (
        <Redirect to="/single-movie"/>
      )
    }

    return (
      <>
        <div className="container">
          <div className="menu">
            <select className="genre-sort" onChange={this.selectChangeGenreHandler} value={movieGenre}>
              {listOfGenres.map((genre) => {
                return <option key={genre}>{genre}</option>
              })}
            </select>
            <div>
              <label>Search: </label>
              <input type="search" onChange={this.searchHandler} value={searchParam}/>
            </div>
            <select className="view-switch" onChange={this.selectChangeViewHandler} value={viewType}>
              <option>Tile</option>
              <option>List</option>
            </select>
          </div>

          {error && <div>
            <p style={{ color: 'white' }}>Error during uploading data.</p>
          </div>}

          {loading && <div>
            <p style={{ color: 'white' }}>LOADING...</p>
          </div>}
          {!loading && !error && <div className="movies-list">
            {sortConfig &&
            sortConfig.viewType === MoviesListViewType.list ?
              <div className="single-movie-list">
                <div className="image-list"></div>
                <div className="info">
                  <p className="movie-name-list">Movie name</p>
                  <p className="movie-name-list">Genres</p>
                </div>
              </div>
              :
              <div className="single-movie-tile">
                <div className="image"></div>
                <p className="movie-name">Movie name</p>
                <p className="movie-name">Genres: </p>
              </div>}
          </div>}
        </div>

        {/*<button onClick={this.goToSingleHandler}>Go to single movie</button>*/}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {

  return {
    loading: state.moviesList.loading,
    error: state.moviesList.error,
    singleMovie: state.singleMovie.singleMovie,
    sortConfig: state.sortConfig,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSetListMoviesStart: () => (dispatch(moviesListActions.setMoviesListStart())),
    onSetListMoviesSuccess: (moviesList: MoviesList) => (
      dispatch(moviesListActions.setMoviesListSuccess(moviesList))
    ),
    onSetListMoviesFailed: () => (dispatch(moviesListActions.setMoviesListFailed())),
    onChangeViewType: (param: SortConfigParam) => (
      dispatch(sortConfigActions.changeSortConfig(param))
    ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);
