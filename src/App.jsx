import React from 'react';
import SideMenu from './containers/SideMenu';
import MainContent from './containers/MainContent';
import Search from './containers/Search';
import Pagination from './containers/Pagination';
import './App.css';

const App = () => (
  <div className="container">
    <SideMenu />
    <MainContent />
    <Search />
    <Pagination />
  </div>
);

export default App;
