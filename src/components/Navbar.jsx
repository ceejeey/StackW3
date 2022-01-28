import React from 'react';
import * as style from './Navbar_style.css';

function Navbar({ setToggleState, toggleState }) {
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={style.AppHeader}>
      <div className={style.Navmenu} variants={container} initial="hidden" animate="show" exit="exit">
        <div
          variants={item}
          className={toggleState === 1 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(1)}
        >
          All
        </div>
        <div
          variants={item}
          className={toggleState === 2 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(2)}
        >
          Styling
        </div>
        <div
          variants={item}
          className={toggleState === 3 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(3)}
        >
          State Managment
        </div>
        <div
          variants={item}
          className={toggleState === 4 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(4)}
        >
          Data Fetching
        </div>
        <div
          variants={item}
          className={toggleState === 5 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(5)}
        >
          Misc
        </div>
      </div>
    </div>
  );
}

export default Navbar;
