import React from 'react';

import './App.scss';
import Content from './main/Content';
import Sidebar from './main/SideBar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
