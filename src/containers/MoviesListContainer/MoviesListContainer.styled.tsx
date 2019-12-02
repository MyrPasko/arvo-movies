import $ from 'styled-components';

export const Container = $.div`
    width: 1140px;
    margin: auto;
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    padding-top: 72px;
`;

export const Menu = $.div`
    height: 72px;
    width: 1140px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: green;
    position: fixed;
    top: 0;
`;

export const MoviesWrapper = $.div`
  display: flex;
  flex-wrap: wrap;
`;
