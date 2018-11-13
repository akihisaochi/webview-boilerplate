/* eslint react/prop-types: 0 */
import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer } = Context;

class ContextApiTest extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            increment: () => this.setState({ count: this.state.count + 1 }),
            decrement: () => this.setState({ count: this.state.count - 1 }),
          },
        }}
      >
        <h1>parent</h1>
        <p>{this.state.count}</p>
        <hr />
        <Counter />
      </Provider>
    );
  }
}
const Counter = () => (
  <Consumer>
    {({ state, actions }) => (
      <div>
        <h1>child</h1>
        <p>{state.count}</p>
        <p>
          <button
            onClick={actions.increment}
            style={{ width: '100px', border: 'solid 1px gray' }}
          >
            +1
          </button>
          <button
            onClick={actions.decrement}
            style={{ width: '100px', border: 'solid 1px gray' }}
          >
            -1
          </button>
        </p>
      </div>
    )}
  </Consumer>
);
export default ContextApiTest;
