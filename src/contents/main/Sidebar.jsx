import React from 'react';

import style from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div id="main-sidebar" className={style.container}>
      <span style={{ color: 'white' }}>Sidebar</span>
    </div>
  );
}

export default Sidebar;
