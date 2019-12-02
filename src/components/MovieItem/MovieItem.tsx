import React, { FunctionComponent } from 'react';
import { MoviesListViewType, SingleMovie } from '../../shared/types';
import { SortConfigState } from '../../store/sortConfig/types';
import {
  BoldParagraph,
  Info,
  MovieListImage,
  MovieTile,
  MovieTileImage,
  Paragraph,
  MovieListItem
} from './MovieItem.styled';

interface OwnProps {
  movie: SingleMovie,
  sortConfig: SortConfigState,
  toSingleMovieHandler: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    movie: SingleMovie,
  ) => void
}

type Props = OwnProps;

const movieItem: FunctionComponent<Props> = ({ movie, toSingleMovieHandler, sortConfig }) => {
  const { name, genres, img } = movie;
  const { viewType } = sortConfig;

  return viewType === MoviesListViewType.list ?
    <MovieListItem
      onClick={(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
      ) => toSingleMovieHandler(e, movie)}>
      <MovieListImage src={require(`../../assets/movieCovers/${img}`)}/>
      <Info>
        <BoldParagraph>{name}</BoldParagraph>
        <Paragraph>{genres.join(', ')}</Paragraph>
      </Info>
    </MovieListItem>
    :
    <MovieTile
      onClick={(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
      ) => toSingleMovieHandler(e, movie)}>
      <MovieTileImage src={require(`../../assets/movieCovers/${img}`)}/>
      <BoldParagraph>{name}</BoldParagraph>
      <Paragraph>{genres.join(', ')}</Paragraph>
    </MovieTile>
};

export default movieItem;
