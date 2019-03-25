import * as React from 'react';
import { Link } from 'react-router-dom';

import { Entry } from '../../types/index';
import './item.scss';

interface Props {
  entry: Entry;
}

const item: React.SFC<Props> = (props: Props) => (
  <div className="entry">
    <Link
      to={{
        pathname: `/entries/${props.entry.slug}`,
        state: { entry: props.entry }
      }}
      className="entry-link"
    >
      <img
        className="entry-image"
        src={props.entry.imageUrl}
        alt={props.entry.title}
      />
      <p className="entry-title">{props.entry.title}</p>
      <div className="entry-info">
        <span className="entry-info--feedName">{props.entry.feed.name}</span>
        <span className="entry-info--publishedAgo">
          {props.entry.publishedAgo}
        </span>
      </div>
    </Link>
  </div>
);

export default item;
