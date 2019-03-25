import * as React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import Content from '../../components/Entry/content';
import { Entry as EntryType } from '../../types/index';
import './Entry.scss';

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
      <div className="Entry">
        <Content entry={this.entry} />
        <Link to="/" className="Entry-back">
          <IoIosArrowBack size="30px" color="#222" />
          <span>ホームに戻る</span>
        </Link>
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
