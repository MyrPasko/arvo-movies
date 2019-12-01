import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { $Auxx } from './Auxx.styled';

interface OwnProps {
  children: ReactNode,
}

type Props = OwnProps;

const Auxx: FunctionComponent<Props> = ({ children }) => {

  return (
    <$Auxx>
      {children}
    </$Auxx>
  );
};

export default Auxx;
