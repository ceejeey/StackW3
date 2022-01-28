import React from 'react';
import * as style from './Navbar_style.css';

function Navbar({ setToggleState, toggleState }) {
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={style.AppHeader}>
      <div className={style.Navmenu}>
        <div className={toggleState === 1 ? style.ActiveNavlink : style.Navlink} onClick={() => toggleTab(1)}>
          All
        </div>
        <div className={toggleState === 2 ? style.ActiveNavlink : style.Navlink} onClick={() => toggleTab(2)}>
          Styling
        </div>
        <div className={toggleState === 3 ? style.ActiveNavlink : style.Navlink} onClick={() => toggleTab(3)}>
          State Managment
        </div>
        <div className={toggleState === 4 ? style.ActiveNavlink : style.Navlink} onClick={() => toggleTab(4)}>
          Data Fetching
        </div>
        <div className={toggleState === 5 ? style.ActiveNavlink : style.Navlink} onClick={() => toggleTab(5)}>
          Misc
        </div>
      </div>
    </div>
  );
}

export default Navbar;
