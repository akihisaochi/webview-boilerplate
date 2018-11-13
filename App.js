import React from 'react';
import { AppRegistry, WebView, View } from 'react-native';
import Expo from 'expo';
import { Root } from 'native-base';

import LoadingScreen from './app/screen/LoadingScreen/';


const WebHTML = require('./web/build/index.html');
const Roboto = require('native-base/Fonts/Roboto.ttf');
const RobotoMedium = require('native-base/Fonts/Roboto_medium.ttf');

export default class App extends React.Component {
  state = {
    loading: true,
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
    });
    this.disableLoading();
  }
  disableLoading() {
    this.setState({ loading: false });
  }
  render() {
    const screen = this.state.loading
      ? <LoadingScreen />
      : <Root><View style={{ flex: 1 }}><WebView source={WebHTML} scalesPageToFit javaScriptEnabled /></View></Root>;
    return screen;
  }
}
AppRegistry.registerComponent('App', () => App);
