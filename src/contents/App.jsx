import React from 'react';

import './App.scss';
import Content from './main/Content';
import Sidebar from './main/SideBar';
import Quicks from './quicks/quicks';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
      <Quicks />
    </div>
  );
}

export default App;
