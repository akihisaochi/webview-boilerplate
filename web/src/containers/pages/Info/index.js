import React, { Component } from 'react';
import {
  Page,
  Toolbar,
  BackButton,
} from '../../../../node_modules/react-onsenui';

class Info extends Component {
  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">トイレ閲覧</div>
        </Toolbar>
      </Page>
    );
  }
}
export default Info;
