import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './index.styled';
import Auxx from './hoc/Auxx/Auxx';
import AllMoviesContainer from './containers/MoviesListContainer/MoviesListContainer';
import SingleMovieContainer from './containers/SingleMovieContainer/SingleMovieContainer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Auxx>
        <Switch>
          <Route path="/single-movie" component={SingleMovieContainer}/>
          <Route path="/" exact component={AllMoviesContainer}/>
        </Switch>
      </Auxx>
    </>
  );
};

export default App;
