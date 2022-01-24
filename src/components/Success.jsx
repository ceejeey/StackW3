import { Alert, AlertTitle, Button, Container, Modal, Link } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import * as style from './Success_style.css';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Success() {
  const { user, repo } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <Modal keepMounted open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div className={style.Container}>
        <div className={style.SuccessContainer}>
          <div className={style.CheckCircleIcon}>
            <CheckCircleIcon sx={{ fontSize: 38 }} />
          </div>
          <div className={style.HeaderContainer}>
            <span className={style.title}>The template successfully created !</span>
            <span className={style.Description}>
              The template named cors has been successfully created in your github repo
            </span>
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
              window.location.href = `https://github.com/${user}/${repo}`;
            }}
          >
            View Repo
          </button>
        </div>
      </div>
    </Modal>
  );
}
