import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import AlertHandler from '../components/AlertHandler';
import { motion } from 'framer-motion';
import { templateList } from '../components/templateList';

import * as style from './Home_style.css';

function Home() {
  const [alert, setAlert] = useState(false);
  const [toggleState, setToggleState] = useState('all');
  const [loadState, setloadState] = useState();
  const [content, setContent] = useState(templateList);

  const containerAnimation = {
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const cardAnimation = {
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

  useEffect(() => {
    if (toggleState === 'all') {
      setContent(templateList);
    } else {
      const filteredCategoryArr = templateList.filter((template) => template.category === toggleState);
      setContent(filteredCategoryArr);
    }
  }, [toggleState]);

  return (
    <>
      <Navbar setToggleState={setToggleState} toggleState={toggleState} />
      <div className={style.HomeContainer}>
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className={toggleState === toggleState ? style.ActiveContent : style.Content}
        >
          {content.map((template) => (
            <Card
              id={template.id}
              variants={cardAnimation}
              description={template.description}
              title={template.title}
              tags={template.tags}
              loadState={loadState}
              setloadState={setloadState}
              setAlert={setAlert}
            />
          ))}
        </motion.div>
        <AlertHandler message={'Download Successful!'} alert={alert} setAlert={setAlert} />
      </div>
    </>
  );
}

export default Home;
