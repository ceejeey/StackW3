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

  const container = {
    show: {}
  };

  const item = {
    hidden: {
      x: -500,
      opacity: 0,
      scale: 0.2
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.9
      }
    },
    exit: {
      opacity: 0,
      x: -500,
      scale: 1,
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
  {
    (' ');
  }
  return (
    <motion.div
      className={style.backgroundImage}
      onClick={() => navigate('/')}
      variants={container}
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
            <Tooltip title="Share" placement="top-start">
              <IconButton color="primary" size="large">
                <ShareIcon
                  className={style.Icon}
                  onClick={() => ShareId(`https://stactw3protocol.netlify.app/${template}`)}
                ></ShareIcon>
              </IconButton>
            </Tooltip>
            <AlertHandler message={alertType} alert={alert} setAlert={setAlert} />
            <div className={style.Iconbackground}>
              <Tooltip title="Edit code In Codesandbox" placement="top-start">
                <span
                  className={style.IconSandBox}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`https://githubbox.com/ceejeey/${title}`, '_blank');
                  }}
                >
                  <img src={codesandbox_icon} alt="HOME" />
                </span>
              </Tooltip>
            </div>
            <ActionButton
              icon={<DownloadIcon sx={{ fontSize: 16 }} />}
              dataHandler={templatetitle}
              template={template}
              buttonName="Download"
              button="DetailsBtn"
              tooltipStatus="Click to Download"
            />

            <ActionButton
              icon={<GitHubIcon sx={{ fontSize: 16 }} />}
              dataHandler={modalOpen}
              template={template}
              buttonName="Clone"
              button="DetailsBtn"
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
