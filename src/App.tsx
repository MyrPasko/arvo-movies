import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  AppContainer,
  AppHeader,
  AppTitle,
  AppLogo,
  AppLink,
} from './App.styled';
import { GlobalStyle } from './index.styled';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo"/>
          <AppTitle>
            Edit <code>src/App.tsx</code> and save to reload.
          </AppTitle>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppContainer>
    </>
  );
}

export default App;
