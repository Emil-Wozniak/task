import React from 'react';
import './App.less';
import AppHeader from './components/layout/app-header';
import Home from './modules/home/home';
import AppFooter from './components/layout/app-footer';
import { iconLoader } from './config/icon-loader';

iconLoader();

const App = () => (
  <div className="App">
    <AppHeader />
    <Home />
    <AppFooter />
  </div>
);

export default App;
