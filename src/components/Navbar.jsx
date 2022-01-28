import React from 'react';
import * as style from './Navbar_style.css';
import { motion } from 'framer-motion';

const container = {
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: -500
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      ease: 'easiInOut',
      duration: 0.8
    }
  }
};
function Navbar({ setToggleState, toggleState }) {
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={style.AppHeader}>
      <motion.div className={style.Navmenu} variants={container} initial="hidden" animate="show" exit="exit">
        <motion.div
          variants={item}
          className={toggleState === 1 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(1)}
        >
          All
        </motion.div>
        <motion.div
          variants={item}
          className={toggleState === 2 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(2)}
        >
          Styling
        </motion.div>
        <motion.div
          variants={item}
          className={toggleState === 3 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(3)}
        >
          State Managment
        </motion.div>
        <motion.div
          variants={item}
          className={toggleState === 4 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(4)}
        >
          Data Fetching
        </motion.div>
        <motion.div
          variants={item}
          className={toggleState === 5 ? style.ActiveNavlink : style.Navlink}
          onClick={() => toggleTab(5)}
        >
          Misc
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Navbar;
