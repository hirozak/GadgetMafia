import * as React from 'react';

import { Entry } from '../../types/model';

class Entries extends React.Component {
  componentWillMount() {
    console.log("component will mount");
  }

  render() {
    return <h2>entries</h2>;
  }
}

export default Entries;
