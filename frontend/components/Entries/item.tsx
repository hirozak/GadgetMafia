import * as React from 'react';

import { Entry } from '../../types/index';
import './item.scss';

interface Props {
  entry: Entry;
}

const item: React.SFC<Props> = (props: Props) => (
  <div className="entry">
    <div className="entry-container">
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
    </div>
  </div>
);

export default item;
