import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { addEntries } from '../../store/actions/index';
import { EntriesState, Entry, RootActions, RootState } from '../../types/index';

interface Props {
  entriesData: EntriesState;
  fetchEntries: (entries: Entry[]) => void;
}

class Entries extends React.Component<Props> {
  componentWillMount() {
    this.props.fetchEntries([{ id: 1 }]);
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

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => {
  return {
    fetchEntries: (entries: Entry[]) => dispatch(addEntries(entries))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Entries)
);
