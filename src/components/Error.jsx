import React from 'react';
import { useParams } from 'react-router';
import * as style from './Error_style.css';
import { useState } from 'react';

import Loading from './Loading';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Error() {
  const { template } = useParams();
  const GITHUB_CLIENT_ID = '284633ed1aa09d0f2c16';

  const [templateName, setTemplateName] = useState('');
  const [loading, setLoading] = useState();
  const [visibility, setVisibility] = useState('');

  const repovisibility = (value) => {
    setVisibility(value);
  };

  const onClickGithub = (index) => {
    setLoading(true);
    setTemplateName(index);
    console.log('hello');
    const gitHubRedirectURL = `https://nowwgo6dd6.execute-api.us-west-2.amazonaws.com/prod/github?data=${template},${templateName},${visibility},repo`;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}&scope=repo`;
  };

  return (
    <>
      <div className={style.ModalContainer}>
        <div className={style.ModalHeaderContainer}>
          <span className={style.header}>Add to your github</span>
        </div>
        <div className={style.SuccessContainer}>
          <div className={style.CheckCircleIcon}>
            <CheckCircleIcon sx={{ fontSize: 38 }} />
          </div>
          <div className={style.HeaderContainer}>
            <span className={style.title}>The template successfully created !</span>
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
          <div className={style.OptionContainer}>
            <div className={style.VisibilityContainer}>
              <div className={style.VisibilityWrapper}>
                <label for="myRadio">Public</label>
                <label for="myRadio" className={style.Description}>
                  Anyone on the internet can see this repository. You choose who can commit.
                </label>
              </div>
              <div class="RadioContainer">
                {' '}
                <input
                  class="Radio"
                  type="radio"
                  id="myRadio"
                  name="fname"
                  value="public"
                  required
                  onClick={() => repovisibility('public')}
                ></input>
                <div className={style.Radio} class="Radio__Radio"></div>
              </div>
            </div>
            <div className={style.VisibilityContainer}>
              <div className={style.VisibilityWrapper}>
                <label for="myRadioId">Private</label>
                <label className={style.Description} for="myRadioId">
                  You choose who can see and commit to this repository.
                </label>
              </div>
              <div class="RadioContainer">
                <input
                  class="Radio"
                  type="radio"
                  id="myRadioId"
                  name="fname"
                  value="private"
                  onClick={() => repovisibility('private')}
                ></input>
                <div className={style.Radio} class="Radio__Radio"></div>
              </div>
            </div>
          </div>
          <div className={style.ModalinputContainer}>
            <div className={style.ButtonContainer}>
              <button
                disabled={!templateName && !visibility}
                className={style.Button}
                onClick={() => onClickGithub(template)}
              >
                {loading ? <Loading /> : 'Create Repo'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
