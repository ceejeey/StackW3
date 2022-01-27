import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Alert from '../components/Alert';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

import * as style from './Home_style.css';

function Home() {
  const [alert, setAlert] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const [loadState, setloadState] = useState();
  const templateList = [
    {
      id: 1,
      description:
        "LoremIpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: 'react-base',
      tags: ['react']
    },
    {
      id: 2,
      description:
        "LoremIpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: 'react-Base-router-Configs',
      tags: ['emotion', 'react']
    },
    {
      id: 3,
      description:
        "LoremIpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: 'react-Base-testing-library',
      tags: ['emotion', 'react']
    }
  ];

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
      y: 500
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

  return (
    <>
      <div className={style.HomeContainer}>
        <Navbar setToggleState={setToggleState} toggleState={toggleState} />
        <Alert message={'Download Successful!'} alert={alert} />
        <motion.div
          className={toggleState === 1 ? style.ActiveContent : style.Content}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {templateList.map((template) => (
            <Card
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
