import * as React from 'react';

import { Entry } from '../types/model';
import './App.scss';

interface Props {
  entries: Entry[];
}

class App extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.entries.map(entry => (
          <div key={entry.id}>
            <div>
              {entry.title}
              <i>{entry.publishedAgo}</i>
            </div>
            <div>from {entry.feed.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
