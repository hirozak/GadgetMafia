import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Entry as EntryType } from '../types/index';

import Entries from '../containers/Entries/Entries';
import Entry from '../containers/Entry/Entry';
import store from '../store/configureStore';
import './App.scss';

interface Props {
  entry: EntryType;
}

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Entries} />
            <Route
              path="/entries/:slug"
              exact={true}
              render={() => <Entry entry={this.props.entry} />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
