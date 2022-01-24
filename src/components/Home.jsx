import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

import { useState, useEffect } from 'react';

import axios from 'axios';

import * as style from './Home_style.css';

function Home() {
  const templateList = [
    {
      description:
        "LoremIpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: 'react-base',
      tags: ['react']
    },
    {
      description:
        "LoremIpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: 'react-Base-router-Configs',
      tags: ['emotion', 'react']
    },
    {
      description:
        "LoremIpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: 'react-Base-testing-library',
      tags: ['emotion', 'react']
    }
  ];

  const [toggleState, setToggleState] = useState(1);

  const [loadState, setloadState] = useState();

  return (
    <>
      <div className={style.Container}>
        <Navbar setToggleState={setToggleState} toggleState={toggleState} />

        <div className={toggleState === 1 ? style.ActiveContent : style.Content}>
          {templateList.map((template) => (
            <Card
              description={template.description}
              title={template.title}
              tags={template.tags}
              loadState={loadState}
              setloadState={setloadState}
            />
          ))}
        </div>

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
