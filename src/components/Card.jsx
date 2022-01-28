import React from 'react';
import Button from './Button';
import * as style from './Content_style.css';
import Tag from './Tag';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import ModalContainer from './ModalContainer';
import DownloadIcon from '@mui/icons-material/Download';

import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import useDownloadTemplate from '../hooks/useDownloadTemplate';
import codesandbox_icon from '../components/Assets/Sandbox.svg';
import ActionButton from './ActionButton';

function Card(props) {
  const { description, title, tags, setAlert, variants } = props;
  const { downloadFromAnchorHandler } = useDownloadTemplate();

  const [template, setTemplate] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTemplate(title);
  }, [template]);

  const downloadTitleHandler = (value) => {
    setTemplate(value);
    const url = `https://github.com/ceejeey/${template}/archive/refs/heads/main.zip`;
    downloadFromAnchorHandler(url);
    setAlert(true);
  };

  const modalOpen = (value) => {
    setTemplate(value);
    setOpen(true);
  };

  return (
    <motion.div className={style.Container} variants={variants}>
      <div className={style.HeaderContainer}>
        <div className={style.HeaderWrap}>
          <span className={style.Title}>{title}</span>
        </div>
        <div className={style.IconContainer}>
          <div className={style.IconWrap}>
            <div className={style.Iconbackground}>
              <Tooltip title="This will be your github repositaory name" placement="top-start">
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
              icon={<GitHubIcon sx={{ fontSize: 16 }} />}
              dataHandler={modalOpen}
              template={title}
              buttonName=""
              button="CardBtn"
              tooltipStatus="Click to Download"
            />
            <ActionButton
              icon={<DownloadIcon sx={{ fontSize: 16 }} />}
              dataHandler={downloadTitleHandler}
              template={title}
              buttonName=""
              button="CardBtn"
              tooltipStatus="Clone to Your Github"
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
      </div>
      <div className={style.Para}>
        <span>{description}</span>
      </div>
      <div className={style.Action}>
        <div className={style.Tags}>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className={style.ButtonsContainer}>
          <Link to={`/${title}`}>
            <Button label="More Details" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
