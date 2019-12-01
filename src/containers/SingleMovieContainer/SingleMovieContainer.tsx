import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = Readonly<{}>;

class SingleMovieContainer extends PureComponent<Props, State> {
  readonly state: State = {};

  render() {
    return (
      <h1>This is Single Movie Container</h1>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer);
