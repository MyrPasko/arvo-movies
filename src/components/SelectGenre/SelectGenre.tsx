import React, { FunctionComponent } from 'react';
import { Select, Option } from './SelectGenre.styled';

interface OwnProps {
  changeGenre: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  listOfGenres: Array<string>,
  movieGenre: string,
}

type Props = OwnProps;

const selectGenre: FunctionComponent<Props> = ({ changeGenre, listOfGenres, movieGenre }) => {

  return (
    <Select className="genre-sort" onChange={changeGenre} value={movieGenre}>
      {listOfGenres.length && <Option key="empty" value="">All genres</Option>}
      {listOfGenres.map((genre) => {
        return <Option key={genre}>{genre}</Option>
      })}
    </Select>
  );
};

export default selectGenre;
