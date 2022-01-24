import React, { useEffect } from 'react';
import * as style from './Modal_style.css';
import { useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Loading from './Loading';
import OptionCard from './OptionCard';

const GITHUB_CLIENT_ID = '284633ed1aa09d0f2c16';

function ModalContainer(props) {
  const { setTemplate, title, template } = props;
  const [visibility, setVisibility] = useState('public');
  const [loading, setLoading] = useState();
  const [templateName, setTemplateName] = useState('');

  const onClickGithub = (index) => {
    setLoading(true);
    setTemplate(index);
    const gitHubRedirectURL = `https://nowwgo6dd6.execute-api.us-west-2.amazonaws.com/prod/github?data=${template},${templateName},${visibility},repo`;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}&scope=repo`;
  };

  return (
    <div className={style.ModalContainer}>
      <div className={style.ModalHeaderContainer}>
        <span className={style.header}>{title}</span>
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
          <Tooltip title="Your github repositaory name">
            <IconButton color="primary">
              <InfoIcon sx={{ fontSize: 18 }} />
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
      </div>
      <div className={style.ModalinputContainer}>
        <div className={style.ButtonContainer}>
          <button disabled={!templateName} className={style.Button} onClick={() => onClickGithub(title)}>
            {loading ? <Loading /> : 'Create Repo'}
          </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
