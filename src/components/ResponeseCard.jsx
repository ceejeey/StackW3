import * as style from './ResponeseCard_style.css';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ResponeseCard(props) {
  const { description, icon, status, title } = props;
  const { user, repo } = useParams();
  const navigate = useNavigate();
  return (
    <div className={style.Container}>
      {status === 'success' ? (
        <>
          <div className={style.SuccessContainer}>
            <div className={style.CheckCircleIcon}>{icon}</div>
            <div className={style.HeaderContainer}>
              <span className={style.title}>{status}</span>
              <span className={style.Description}>{description}</span>
            </div>
          </div>
          <div className={style.buttonConatiner}>
            <button className={style.Button} onClick={() => navigate('/')}>
              Cancel
            </button>
            <button
              className={style.Button}
              onClick={(e) => {
                e.preventDefault();
                window.open(`https://github.com/${user}/${repo}`, '_blank');
              }}
            >
              View Repo
            </button>
          </div>
        </>
      ) : (
        <div className={style.NotSuccessContainer}>
          <div className={style.CancelCircleIcon}>
            {icon}
            {title}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResponeseCard;
