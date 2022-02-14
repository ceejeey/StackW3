import React, { useState, useEffect } from 'react';
import * as style from './Card_style.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { githubConfig, codeSandBoxConfig } from '../../constants';

import Tag from './Tag';
import Fab from '../Fab/Fab';

import ModalContainer from '../ModalContainar/ModalContainer';
import Modal from '@mui/material/Modal';

import Btn from '../Button';

import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import useDownloadTemplate from '../../hooks/useDownloadTemplate';
import codesandbox_icon from '../Assets/Sandbox.svg';

function Card(props) {
  const { id, description, title, tags, setAlert, variants } = props;
  const { downloadFromAnchorHandler } = useDownloadTemplate();

  const [template, setTemplate] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTemplate(title);
  }, [template]);

  const downloadTitleHandler = (value) => {
    setTemplate(value);
    const url = `${githubConfig}/${template}/archive/refs/heads/main.zip`;
    downloadFromAnchorHandler(url);
    setAlert(true);
  };

  const modalOpen = (value) => {
    setTemplate(value);
    setOpen(true);
  };

  const codeSandBoxHandler = (e) => {
    window.open(`${codeSandBoxConfig}/${title}`, '_blank');
    e.preventDefault();
  };

  return (
    <motion.div className={style.Container} variants={variants}>
      <div className={style.HeaderContainer}>
        <div className={style.HeaderWrap}>
          <span className={style.Title}>{title}</span>
        </div>
        <div className={style.IconContainer}>
          <Fab
            icon={<img src={codesandbox_icon} alt="HOME" />}
            dataHandler={codeSandBoxHandler}
            data={''}
            buttonName="codeSandBox"
            tooltipStatus="Edit code In Codesandbox"
          />

          <Fab
            icon={<GitHubIcon sx={{ fontSize: 17 }} />}
            dataHandler={modalOpen}
            data={title}
            buttonName="GitHubIcon"
            tooltipStatus="Clone to Your Github"
          />
          <Fab
            icon={<DownloadIcon sx={{ fontSize: 17 }} />}
            dataHandler={downloadTitleHandler}
            data={title}
            buttonName="Download"
            tooltipStatus="Click to download"
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalContainer template={template} modal="modal" handlerModalClose={handleClose} />
          </Modal>
        </div>
      </div>
      <div className={style.descriptionContainer}>
        <span>{description}</span>
      </div>
      <div className={style.Action}>
        <div className={style.Tags}>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className={style.ButtonsContainer}>
          <Link to={`/${title}`} style={{ textDecoration: 'none' }}>
            <Btn label="More details" color="#262626"></Btn>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
