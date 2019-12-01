import { createGlobalStyle } from 'styled-components';
import img from './assets/beanstalk-dark.png';

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    padding: 0;
    margin: 0;
    height: 100%;
    background: url(${img});
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: Consolas, 'Courier New',
      monospace;
  }
`;
