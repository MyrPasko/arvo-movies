import React, { FunctionComponent, ReactNode } from 'react';

interface OwnProps {
  children: ReactNode,
}

type Props = OwnProps;

const Auxx: FunctionComponent<Props> = ({ children }) => {

  return (
    <main>
      {children}
    </main>
  );
};

export default Auxx;
