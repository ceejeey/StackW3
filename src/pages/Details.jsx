import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as style from './Details_style.css';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import useDownloadTemplate from '../hooks/useDownloadTemplate';

import ModalContainer from '../components/ModalContainer';
import ActionButton from '../components/ActionButton';

import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Alert from '../components/Alert';

function Details() {
  const { template } = useParams();
  const { downloadFromAnchorHandler } = useDownloadTemplate();

  console.log(template);

  const [text, setText] = useState('');
  const [templateN, setTemplate] = useState('');
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTemplate(template);
  }, [template]);

  const templatetitle = (index) => {
    setTemplate(index);
    const url = `https://github.com/ceejeey/${template}/archive/refs/heads/main.zip`;
    downloadFromAnchorHandler(url);
    setAlertType('Download Successful!');
    successMessage();
  };

  const modalOpen = (index) => {
    setTemplate(index);
    handleOpen();
  };

  const ShareId = (index) => {
    setText(index);
    copy();
    setAlertType('Copied!');
    successMessage();
  };

  const successMessage = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className={style.Container}>
      <div className={style.CancelIconWrapper}>
        <div className={style.HeaderWrapper}>
          <span className={style.tag}>react-base-ts</span>
          <span className={style.tag}>Public Template</span>
        </div>
        <IconButton color="error" size="large">
          <Link to={'/'}>
            <CancelIcon className={style.CancelIcon} sx={{ fontSize: 32 }} />
          </Link>
        </IconButton>
      </div>
      <div className={style.HeaderContainer}>
        <div className={style.ActionWrapper}>
          <IconButton color="primary" size="large">
            <ShareIcon
              className={style.Icon}
              onClick={() => ShareId(`https://stactw3protocol.netlify.app/${template}`)}
            ></ShareIcon>{' '}
          </IconButton>
          <Alert message={alertType} alert={alert} />
          <ActionButton
            icon={<DownloadIcon sx={{ fontSize: 16 }} />}
            dataHandler={templatetitle}
            template={template}
            buttonName="Download"
            button="DetailsBtn"
          />
          <ActionButton
            icon={<GitHubIcon sx={{ fontSize: 16 }} />}
            dataHandler={modalOpen}
            template={template}
            buttonName="Clone"
            button="DetailsBtn"
          />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalContainer modal="modal" template={template} />
          </Modal>
        </div>
      </div>
      <div className={style.DecsriptionContainer}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
      <span className={style.DecsriptionHeader}>Dependencies (23)</span>
      <div className={style.TagsContainer}>
        <span className={style.Tags}>@types/react </span>
        <span className={style.Tags}>@types/react-dom </span>
        <span className={style.Tags}>@typescript-eslint/eslint-plugin </span>
        <span className={style.Tags}>@vitejs/plugin-react-refresh </span>
        <span className={style.Tags}>vite </span>
        <span className={style.Tags}>husky </span>
        <span className={style.Tags}>prettier </span>
        <span className={style.Tags}>@types/react </span>
        <span className={style.Tags}>@types/react-dom </span>
        <span className={style.Tags}>@typescript-eslint/eslint-plugin </span>
        <span className={style.Tags}>@vitejs/plugin-react-refresh </span>
        <span className={style.Tags}>vite </span>
        <span className={style.Tags}>husky </span>
        <span className={style.Tags}>prettier </span>
      </div>
    </div>
  );
}

export default Details;
