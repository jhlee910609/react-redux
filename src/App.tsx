import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './redux/actions';

class App extends React.Component<any, any> {

  private hanldeChange(e: KeyboardEvent) {
    
  }

  public shouldComponentUpdate (): boolean {
    return this.props.count > 0;
  }

  public render() {
    
    return (
      <div className="App">
        <h1>카운터</h1>
        <h2 style={{color: `${this.props.count >= 0 ? 'blue' : 'red'}`}}>{this.props.count}</h2>
        <button onClick={() => this.props.increase()}>플러스</button>
        <button onClick={() => this.props.decrease()}>마이너스</button>
      </div>
    );
  }
}

export default connect(
  (state: any) => {
    const count = state.counter.count;
    return { count }
  },
  { increase, decrease }
)(App)