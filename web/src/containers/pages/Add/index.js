import React, { Component } from 'react';
import {
  Page,
  Toolbar,
  BackButton,
} from '../../../../node_modules/react-onsenui';

class Add extends Component {
  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">トイレ追加</div>
        </Toolbar>
      </Page>
    );
  }
}
export default Add;
