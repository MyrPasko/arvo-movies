import React from 'react';

import $ from 'styled-components';

export const MovieTile = $.div`
  width: 182px;
  height: 347px;
  border-radius: 5px;
  margin: 23px;
  background-color: #f0ffff;
  cursor: pointer;
`;

export const MovieTileImage = $.img`
  height: 268px;
  width: 182px;
  background-size: contain;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Paragraph = $.p`
  margin: 5px;
`;

export const BoldParagraph = $(Paragraph)`
  font-weight: bold;
`;

export const MovieListItem = $.div`
  width: 100%;
  height: 72px;
  border-radius: 5px;
  margin: 23px;
  background-color: #f0ffff;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
`;

export const MovieListImage = $.img`
  height: 72px;
  width: 49px;
  background-size: contain;
  border-radius: 5px;
`;

export const Info = $.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
