import * as React from 'react';
import './App.scss';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <p className="hello">Hello {this.props.name}</p>
      </div>
    );
  }
}

export default App;
