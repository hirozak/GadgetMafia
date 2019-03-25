import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Entry as EntryType } from '../../types/index';

interface Props {
  entry: EntryType;
}

class Entry extends React.Component<RouteComponentProps, Props> {
  public entry: EntryType =
    this.props.entry === undefined
      ? this.props.location.state.entry
      : this.props.entry;

  render() {
    return (
      <div>
        <h2>entries#show</h2>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(Entry)
);
