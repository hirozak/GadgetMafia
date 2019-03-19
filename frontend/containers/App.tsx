import * as React from 'react';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  }
}

export default App;
