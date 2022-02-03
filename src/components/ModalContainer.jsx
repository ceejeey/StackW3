import React, { useEffect } from 'react';
import * as style from './Modal_style.css';
import { useState } from 'react';

import { motion } from 'framer-motion';

import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Loading from './Loading';
import OptionCard from './OptionCard';

const GITHUB_CLIENT_ID = '284633ed1aa09d0f2c16';

const item = {
  hidden: {
    opacity: 0,
    transform: 'scale(.99)'
  },
  show: {
    opacity: 1,
    transform: 'scale(1.02)',
    transition: {
      transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    transform: 'scale(.99)',
    transition: {
      transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
      duration: 0.3
    }
  }
};

function ModalContainer(props) {
  const { template, modal, handlerModalClose } = props;
  const [visibility, setVisibility] = useState('public');
  const [loading, setLoading] = useState();
  const [templateName, setTemplateName] = useState('');

  const onClickGithub = (index) => {
    setLoading(true);
    const gitHubRedirectURL = `https://nowwgo6dd6.execute-api.us-west-2.amazonaws.com/prod/github?data=${template},${templateName},${visibility},repo`;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}&scope=repo`;
  };

  return (
    <motion.div className={style.Container} variants={item}>
      <div className={style.ModalContainer}>
        <div className={style.ModalHeaderContainer}>
          <span className={style.header}>{template}</span>
        </div>

        <div className={modal === 'errorModal' ? style.SuccessContainer : style.SuccessContainerDisabled}>
          <div className={style.CheckCircleIcon}>
            <CancelIcon sx={{ fontSize: 38 }} />
          </div>
          <div className={style.HeaderContainer}>
            <span className={style.title}>Template name already exist !</span>
            <span className={style.Successmesaggewrapper}>
              The template name you entered is already exist in your github account. Please try another name
            </span>
          </div>
        </div>
        <div className={style.ModalTextContainer}>
          <input
            className={style.input}
            type="text"
            id="fname"
            name="fname"
            onChange={(e) => setTemplateName(e.target.value)}
            placeholder="Enter the template name"
          ></input>
          <div className={style.Tooltip}>
            <Tooltip title="This will be your github repositaory name">
              <IconButton color="primary">
                <InfoIcon className={style.Grey} sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          </div>

          <div className={style.OptionContainer}>
            <OptionCard
              card="public"
              id="myRadio"
              setVisibility={setVisibility}
              visibility={visibility}
              desc="  Anyone on the internet can see this repository. You choose who can commit."
            />
            <OptionCard
              card="private"
              id="myRadioId"
              setVisibility={setVisibility}
              visibility={visibility}
              desc=" You choose who can see and commit to this repository."
            />
          </div>
          <div className={style.ModalinputContainer}>
            <div className={style.ButtonContainer}>
              <button disabled={!templateName} className={style.Button} onClick={() => onClickGithub(template)}>
                {loading ? <Loading /> : 'Create Repo'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ModalContainer;
