import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import Item from '../../components/Entries/item';
import ItemLoader from '../../components/Entries/itemLoader';
import { fetchEntries } from '../../store/actions/index';
import { EntriesActions, EntriesState, RootState } from '../../types/index';
import './Entries.scss';

interface Props {
  entriesData: EntriesState;
  fetchEntries: () => void;
}

class Entries extends React.Component<Props> {
  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
      <div className="entries">
        {this.props.entriesData.entries.map(entry => (
          <Item key={entry.id} entry={entry} />
        ))}
        {this.props.entriesData.isFetching && <ItemLoader />}
      </div>
    );
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
