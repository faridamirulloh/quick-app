import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import '@/src/contents/App.scss';
import Content from '@/src/contents/main/Content';
import Sidebar from '@/src/contents/main/SideBar';
import Quicks from '@/src/contents/quicks/quicks';

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
