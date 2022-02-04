import React, { useState } from 'react';
import * as style from './Navbar_style.css';

import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ setToggleState, toggleState }) {
  const [open, setopen] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
    setopen(false);
  };

  const dropDownMenuHandler = () => {
    open === false ? (setopen(true), settoggleMenu(true)) : (setopen(false), settoggleMenu(false));
  };

  return (
    <div className={style.AppHeader}>
      <div className={style.toggleBar} onClick={() => dropDownMenuHandler()}>
        <MenuIcon className={toggleMenu === false ? style.MenuIcon : style.MenuIconOpen} sx={{ fontSize: 28 }} />
      </div>
      <div className={open === true ? style.dropDownMenu : style.Navmenu}>
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
