import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/rootTypes';
import * as moviesListActions from '../../store/moviesList/actions';
import * as sortConfigActions from '../../store/sortConfig/actions';
import * as singleMovieActions from '../../store/singleMovie/actions';
import { FilterByConfig, getMoviesListHelper } from '../../shared/utils';
import { HelperTexts, MoviesList, SingleMovie, SortConfigParam } from '../../shared/types';
import { Container, Menu, MoviesWrapper } from './MoviesListContainer.styled';
import HelperText from '../../components/HelperText/HelperText';
import SelectGenre from '../../components/SelectGenre/SelectGenre';
import Search from '../../components/Search/Search';
import SelectView from '../../components/SelectView/SelectView';
import MovieItem from '../../components/MovieItem/MovieItem';

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

  buildGenresList = (movies: MoviesList) => {
    const setOfGenres: Set<string> = new Set();
    let listOfGenres: Array<string>;

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

  renderRedirect = () => {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return (
        <Redirect to="/single-movie"/>
      )
    }
  };

  redirectToSingleMovieHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, movie: SingleMovie) => {
    const { onSetSingleMovie } = this.props;

    e.preventDefault();
    onSetSingleMovie(movie);
    this.setState({ shouldRedirect: true });
  };

  render() {
    const { listOfGenres } = this.state;
    const { loading, error, sortConfig, movieList } = this.props;
    const { viewType, movieGenre, searchParam } = sortConfig;
    const filterByConfig = new FilterByConfig(movieList, sortConfig);
    const filteredData = filterByConfig.sortByGenre().sortBySearchParam();

    return (
      <>
        {this.renderRedirect()}
        <Container>
          <Menu>
            <SelectGenre
              changeGenre={this.selectChangeGenreHandler}
              listOfGenres={listOfGenres}
              movieGenre={movieGenre}
            />
            <Search searchHandler={this.searchHandler} searchParam={searchParam}/>
            <SelectView changeViewHandler={this.selectChangeViewHandler} viewType={viewType}/>
          </Menu>

          {error && <HelperText helpText={HelperTexts.requestError}/>}

          {loading && <HelperText helpText={HelperTexts.loading}/>}

          {!filteredData.length && !loading && <HelperText helpText={HelperTexts.noResults}/>}

          {!loading &&
          !error &&
          <MoviesWrapper>
            {filteredData.map((movie: SingleMovie) => {
              const { id } = movie;

              return (
                <MovieItem
                  key={id}
                  movie={movie}
                  sortConfig={sortConfig}
                  toSingleMovieHandler={this.redirectToSingleMovieHandler}
                />
              )
            })}
          </MoviesWrapper>}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {

  return {
    movieList: state.moviesList.list,
    loading: state.moviesList.loading,
    error: state.moviesList.error,
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
    onSetSingleMovie: (movie: SingleMovie) => (dispatch(singleMovieActions.setSingleMovie(movie))),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);
