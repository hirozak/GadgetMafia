import * as React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
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
      <div className="Entry-wrapper">
        <IoIosArrowBack size="30px" color="#222" />
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
