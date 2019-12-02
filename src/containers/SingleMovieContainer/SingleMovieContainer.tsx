import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Menu, MoviesWrapper } from '../MoviesListContainer/MoviesListContainer.styled';
import { RootState } from '../../store/rootTypes';
import {
  BoldParagraph,
  Paragraph
} from '../../components/MovieItem/MovieItem.styled';
import { $MovieItem, $MovieImage, BackButton, Info } from './SingleMovieContainer.styled';
import HelperText from '../../components/HelperText/HelperText';
import { HelperTexts } from '../../shared/types';

type SingleMovieProps = ReturnType<typeof mapStateToProps>;

type SingleMovieState = Readonly<{
  shouldRedirect: Boolean,
}>;

class SingleMovieContainer extends PureComponent<SingleMovieProps, SingleMovieState> {
  readonly state: SingleMovieState = {
    shouldRedirect: false,
  };

  goToSingleHandler = () => {
    this.setState({ shouldRedirect: true });
  };

  renderRedirect = () => {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return (
        <Redirect to="/"/>
      )
    }
  };

  render() {
    const { singleMovie } = this.props;
    let item;

    if (singleMovie) {
      const { name, description, genres, rate, length, img } = singleMovie;

      item = (
        <MoviesWrapper>
          <$MovieItem>
            <div>
              <$MovieImage src={require(`../../assets/movieCovers/${img}`)}/>
            </div>
            <Info>
              <BoldParagraph>{name}</BoldParagraph>
              <Paragraph>{description}</Paragraph>
              <Paragraph>{genres.join(', ')}</Paragraph>
              <BoldParagraph>Rate: {rate}</BoldParagraph>
              <Paragraph>Duration: {length} min.</Paragraph>
            </Info>
          </$MovieItem>
        </MoviesWrapper>
      )
    } else {
      item = (
        <HelperText helpText={HelperTexts.requestError}/>
      )
    }
    return (
      <>
        {this.renderRedirect()}
        <Container>
          <Menu>
            <BackButton onClick={this.goToSingleHandler}>GO BACK</BackButton>
          </Menu>
          {item}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    singleMovie: state.singleMovie.singleMovie,
  };
};

export default connect(mapStateToProps)(SingleMovieContainer);
