/* eslint react/prop-types: 0 */
import React from 'react';
import { Navigator } from '../../../../node_modules/react-onsenui';

import Home from '../Home/';
import Add from '../Add/';
import Info from '../Info/';

const HomeRouting = ({ navigator }) => <Home navigator={navigator} />;
const AddRouting = () => <Add />;
const InfoRouting = () => <Info />;

const Routing = () => (
  <Navigator
    key="toilep"
    initialRouteStack={[AddRouting, InfoRouting]}
    renderPage={HomeRouting}
    animation="fade"
    animationOptions={{ duration: 0.2, timing: 'ease-in' }}
    swipeable
  />
);
export default Routing;
