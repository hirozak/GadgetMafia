import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Entries from './Entries/Entries';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Entries} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
