import React from 'react';
import SideMenu from './components/SideMenu';
import MainContent from './containers/MainContent';
import Search from './containers/Search';
import './App.css';

const App = () => (
  <div className="container">
    <SideMenu />
    <MainContent />
    <Search />
  </div>
);

export default App;
