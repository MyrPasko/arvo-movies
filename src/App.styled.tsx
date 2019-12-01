import $ from 'styled-components';

export const $Container = $.div`
 text-align: center;
`;

export const $Header = $.header`
 background-color: #222;
 height: 550px;
 padding: 20px;
 color: white;
`;

export const $Title = $.h1`
   font-size: 1.5em;
`;

export const $Logo = $.img`
 animation: App-logo-spin infinite 20s linear;
 height: 80px;
 @keyframes App-logo-spin {
   from { transform: rotate(0deg); }
   to { transform: rotate(360deg); }
 }
`;

export const $Link = $.a`
  color: #09d3ac;
`;
