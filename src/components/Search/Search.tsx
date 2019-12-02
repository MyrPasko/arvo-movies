import React, { FunctionComponent } from 'react';
import { Input } from './Search.styled';

interface OwnProps {
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  searchParam: string,
}

type Props = OwnProps;

const search: FunctionComponent<Props> = ({ searchHandler, searchParam }) => {

  return (
    <div>
      <label>Search: </label>
      <Input type="search" onChange={searchHandler} value={searchParam}/>
    </div>
  );
};

export default search;
