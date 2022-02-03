import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import AlertHandler from '../components/AlertHandler';
import { motion } from 'framer-motion';
import { templateList } from '../components/templateList';

import { useState, useEffect } from 'react';

import * as style from './Home_style.css';

function Home() {
  const [alert, setAlert] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const [loadState, setloadState] = useState();

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
      y: 100
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
        duration: 0.8
      }
    }
  };

  return (
    <>
      <div className={style.HomeContainer}>
        <Navbar setToggleState={setToggleState} toggleState={toggleState} />
        <AlertHandler message={'Download Successful!'} alert={alert} setAlert={setAlert} />
        <motion.div
          className={toggleState === 1 ? style.ActiveContent : style.Content}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {templateList.map((template) => (
            <Card
              id={template.id}
              variants={item}
              description={template.description}
              title={template.title}
              tags={template.tags}
              loadState={loadState}
              setloadState={setloadState}
              setAlert={setAlert}
            />
          ))}
        </motion.div>

        {/* <div className={toggleState === 2 ? style.ActiveContent : style.Content}>
            < {templateList.map((template) => (
                    <Card description={template.description} title={template.title} tags={template.tags} />
                ))}
            </div>

                <div className={toggleState === 3 ? style.ActiveContent : style.Content}>

                </div>

                <div className={toggleState === 4 ? style.ActiveContent : style.Content}>

                </div>

                <div className={toggleState === 5 ? style.ActiveContent : style.Content}>

                </div> */}
      </div>
    </>
  );
}

export default Home;
