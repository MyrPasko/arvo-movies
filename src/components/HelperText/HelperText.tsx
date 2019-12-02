import React, { FunctionComponent } from 'react';
import { HelpText } from './HelperText.styled';

interface OwnProps {
  helpText: string,
}

type Props = OwnProps;

const helperText: FunctionComponent<Props> = ({ helpText }) => {

  return (
    <div>
      <HelpText>{helpText}</HelpText>
    </div>
  );
};

export default helperText;
