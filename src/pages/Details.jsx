import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as style from './Details_style.css';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { templateList } from '../components/templateList';

import useDownloadTemplate from '../hooks/useDownloadTemplate';
import { githubConfig, codeSandBoxConfig } from '../constants';

import ModalContainer from '../components/ModalContainar/ModalContainer';
import Fab from '../components/Fab/Fab';

import Modal from '@mui/material/Modal';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import AlertHandler from '../components/AlertHandler';
import codesandbox_icon from '../components/Assets/Sandbox.svg';

function Details() {
  const { template } = useParams();
  const { downloadFromAnchorHandler } = useDownloadTemplate();
  const navigate = useNavigate();

  const [text, setText] = useState(window.location.href);
  // const [templateN, setTemplate] = useState('');
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const shareUrl = window.location.href;
  // useEffect(() => {
  //   setTemplate(template);
  // }, [template]);

  const templatetitle = (index) => {
    // setTemplate(index);
    const url = `${githubConfig}/${template}/archive/refs/heads/main.zip`;
    downloadFromAnchorHandler(url);
    setAlertType('Download Successful!');
    successMessage();
  };

  const codeSandBoxHandler = (e) => {
    window.open(`${codeSandBoxConfig}/${title}`, '_blank');
    e.preventDefault();
  };

  const modalOpen = () => {
    // setTemplate(index);
    handleOpen();
  };

  const ShareId = () => {
    setText(shareUrl);
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
  let tag = [];
  let description = 'none';
  {
    templateList.map((templateData) =>
      templateData.title === template
        ? ((tag = templateData.dependencies), (description = templateData.description))
        : ''
    );
  }

  return (
    <>
      <motion.div
        className={style.backgroundImage}
        onClick={() => navigate('/')}
        animate={{
          scale: 0.95,
          transition: {
            duration: 0.5
          }
        }}
      ></motion.div>
      <motion.div initial="hidden" animate="show" exit="exit">
        <motion.div className={style.Container} onClick={(e) => e.stopPropagation()} variants={item}>
          <div className={style.CancelIconWrapper}>
            <div className={style.HeaderWrapper}>
              <span className={style.tag}>{template}</span>
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
              <Fab
                icon={<img src={codesandbox_icon} alt="HOME" />}
                dataHandler={codeSandBoxHandler}
                data={''}
                buttonName="codeSandBox"
                tooltipStatus="Edit code In Codesandbox"
              />

              <Fab
                icon={<ShareIcon sx={{ fontSize: 17 }} />}
                dataHandler={ShareId}
                data={shareUrl}
                buttonName="Share"
                tooltipStatus="Share"
              />

              <Fab
                icon={<DownloadIcon sx={{ fontSize: 17 }} />}
                dataHandler={templatetitle}
                data={template}
                buttonName="Download"
                tooltipStatus="Click to Download"
              />

              <Fab
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
      <AlertHandler message={alertType} alert={alert} setAlert={setAlert} />
    </>
  );
}

export default Details;
