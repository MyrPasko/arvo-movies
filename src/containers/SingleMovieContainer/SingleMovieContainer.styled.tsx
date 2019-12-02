import $ from 'styled-components';

export const $MovieItem = $.div`
  width: 100%;
  height: 347px;
  border-radius: 5px;
  margin: 23px;
  background-color: #f0ffff;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
`;

export const $MovieImage = $.img`
  height: 347px;
  width: 236px;
  background-size: contain;
  border-radius: 5px;
`;

export const BackButton = $.button`
  cursor: pointer;
  background-color: #00008b;
  color: #f0ffff;
  width: 100px;
  height: 30px;
  border: 1px solid #00008b;
  border-radius: 10px;
  outline: none;
`;

export const Info = $.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
