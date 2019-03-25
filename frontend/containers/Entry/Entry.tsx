import * as React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import Item from '../../components/Entries/item';
import ItemLoader from '../../components/Entries/itemLoader';
import Content from '../../components/Entry/content';
import { ENDPOINT } from '../../env';
import axios from '../../tools/axios';
import { EntriesState, Entry as EntryType } from '../../types/index';
import './Entry.scss';

interface Props {
  entry: EntryType;
}

interface State {
  feedEntries: EntriesState;
}

class Entry extends React.Component<Props & RouteComponentProps, State> {
  state: State = {
    feedEntries: {
      isInitialized: false,
      entries: [],
      page: 1,
      hasMoreEntries: true,
      isFetching: false
    }
  };

  entry: EntryType =
    this.props.entry === undefined
      ? this.props.location.state.entry
      : this.props.entry;

  fetchFeedEntries() {
    const feedEntries = this.state.feedEntries;
    if (feedEntries.hasMoreEntries && !feedEntries.isFetching) {
      this.setState({
        feedEntries: {
          ...feedEntries,
          isFetching: true
        }
      });
      const API_ENDPOINT = `${ENDPOINT}/entries/${this.entry.slug}`;
      axios
        .get(API_ENDPOINT, {
          params: { page: feedEntries.page }
        })
        .then(res => {
          if (res.data.result === 'success' && res.data.entries.length > 0) {
            this.setState({
              feedEntries: {
                isInitialized: true,
                entries: [...feedEntries.entries, ...res.data.entries],
                page: feedEntries.page + 1,
                hasMoreEntries: true,
                isFetching: false
              }
            });
          } else {
            this.setState({
              feedEntries: {
                ...feedEntries,
                isInitialized: true,
                hasMoreEntries: false,
                isFetching: false
              }
            });
          }
        })
        .catch(error => {
          // tslint:disable-next-line: no-console
          console.log(error);
        });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchFeedEntries();
  }

  render() {
    const feedEntries = this.state.feedEntries;
    return (
      <div className="Entry">
        <Content entry={this.entry} />
        <InfiniteScroll
          dataLength={feedEntries.entries.length}
          next={() => this.fetchFeedEntries()}
          hasMore={feedEntries.hasMoreEntries}
          style={{ overflow: 'scroll' }}
        >
          <div className="Entry-feed">
            <h3 className="Entry-feed--title">
              {this.entry.feed.name}の新着記事
            </h3>
            <div className="Entry-feed--entries">
              {feedEntries.entries.map(entry => (
                <Item key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </InfiniteScroll>
        {feedEntries.isFetching && <ItemLoader />}
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
