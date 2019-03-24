import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from '../store/configureStore';
import Entries from './Entries/Entries';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Entries} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
