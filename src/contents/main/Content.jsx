import React from 'react';

import style from './Content.module.scss';
import IconSearch from '../../components/icons/Search';

function Content() {
  return (
    <div id="main-content" className={style.container}>
      <div id="search-bar" className={style.searchBar}>
        <IconSearch className={style.searchIcon} />
      </div>
    </div>
  );
}

export default Content;
