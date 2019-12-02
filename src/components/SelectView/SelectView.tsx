import React, { FunctionComponent } from 'react';
import { MoviesListViewType } from '../../shared/types';
import { Select, Option } from './SelectView.styled';

interface OwnProps {
  changeViewHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  viewType: MoviesListViewType,
}

type Props = OwnProps;

const SelectView: FunctionComponent<Props> = ({ changeViewHandler, viewType }) => {

  return (
    <Select className="view-switch" onChange={changeViewHandler} value={viewType}>
      <Option>{MoviesListViewType.tiles}</Option>
      <Option>{MoviesListViewType.list}</Option>
    </Select>
  );
};

export default SelectView;
