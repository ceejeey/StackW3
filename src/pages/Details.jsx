import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as style from './Details_style.css';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { templateList } from '../components/templateList';

import useDownloadTemplate from '../hooks/useDownloadTemplate';

import ModalContainer from '../components/ModalContainer';
import ActionButton from '../components/ActionButton';

import Modal from '@mui/material/Modal';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AlertHandler from '../components/AlertHandler';
import codesandbox_icon from '../components/Assets/Sandbox.svg';

function Details() {
  const { template } = useParams();
  const { downloadFromAnchorHandler } = useDownloadTemplate();
  const navigate = useNavigate();

  const [text, setText] = useState(`https://stactw3protocol.netlify.app/${template}`);
  const [templateN, setTemplate] = useState('');
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const shareUrl = `https://stactw3protocol.netlify.app/${template}`;
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
    setText();
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
        ease: 'easiInOut',
        duration: 0.8
      }
    }
  };
  let tag = [];
  let description = 'none';
  {
    templateList.map((templateData) =>
      templateData.title === template
        ? ((tag = templateData.dependencies), (description = templateData.description))
        : ''
    );
  }

  const codeSandBoxHandler = (e) => {
    window.open(`https://githubbox.com/ceejeey/${title}`, '_blank');
    e.preventDefault();
  };
  return (
    <motion.div
      className={style.backgroundImage}
      onClick={() => navigate('/')}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div className={style.Container} onClick={(e) => e.stopPropagation()} variants={item}>
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
            <AlertHandler message={alertType} alert={alert} setAlert={setAlert} />
            <ActionButton
              icon={<img src={codesandbox_icon} alt="HOME" />}
              dataHandler={codeSandBoxHandler}
              data={''}
              buttonName="codeSandBox"
              tooltipStatus="Edit code In Codesandbox"
            />

            <ActionButton
              icon={<ShareIcon sx={{ fontSize: 17 }} />}
              dataHandler={ShareId}
              data={shareUrl}
              buttonName="Share"
              tooltipStatus="Share"
            />

            <ActionButton
              icon={<DownloadIcon sx={{ fontSize: 17 }} />}
              dataHandler={templatetitle}
              data={template}
              buttonName="Download"
              tooltipStatus="Click to Download"
            />

            <ActionButton
              icon={<GitHubIcon sx={{ fontSize: 17 }} />}
              dataHandler={modalOpen}
              data={template}
              buttonName="GitHub"
              tooltipStatus="Clone to Your Github"
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
          <div className={style.Decsription}>{description}</div>
        </div>
        <span className={style.DecsriptionHeader}>Dependencies ({tag.length})</span>
        <div className={style.TagsContainer}>
          {tag.map((tags) => (
            <span
              className={style.Tags}
              onClick={(e) => {
                e.preventDefault();
                window.open(`https://www.npmjs.com/package/${tags}`, '_blank');
              }}
            >
              {tags}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Details;
