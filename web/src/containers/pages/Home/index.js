/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Page, Toolbar } from '../../../../node_modules/react-onsenui';

class Home extends Component {
  componentDidMount() {
    console.info(this.props.navigator);
  }
  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left">
            <i className="fa fa-plus" />
          </div>
          <div className="center">Home</div>
        </Toolbar>
      </Page>
    );
  }
}
export default Home;
