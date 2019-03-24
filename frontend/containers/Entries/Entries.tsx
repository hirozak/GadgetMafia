import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { fetchEntries } from '../../store/actions/index';
import { EntriesActions, EntriesState, RootState } from '../../types/index';

interface Props {
  entriesData: EntriesState;
  fetchEntries: () => void;
}

class Entries extends React.Component<Props> {
  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    return <h2>entries</h2>;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    entriesData: state.entriesData
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<undefined, undefined, EntriesActions>
) => {
  return {
    fetchEntries: () => dispatch(fetchEntries())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Entries)
);
