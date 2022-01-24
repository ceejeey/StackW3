import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as style from './Details_style.css';
import Modal from '@mui/material/Modal';

import ModalContainer from './ModalContainer';

import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';

const downloadFromAnchor = (resource_link) => {
  const link = document.createElement('a');
  link.href = resource_link;

  // Append to html link element page
  document.body.appendChild(link);

  // Start download
  link.click();

  // Clean up and remove the link
  link.parentNode.removeChild(link);
};

function Details() {
  const { template } = useParams();

  console.log(template);

  const [templateN, setTemplate] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTemplate(template);
  }, [template]);

  const templatetitle = (index) => {
    setTemplate(index);
    console.log(template);
    const url = `https://github.com/ceejeey/${template}/archive/refs/heads/main.zip`;
    downloadFromAnchor(url);
  };

  const modalOpen = (index) => {
    setTemplate(index);
    handleOpen();
  };

  return (
    <div className={style.Container}>
      <div className={style.HeaderContainer}>
        <div className={style.HeaderWrapper}>
          <span className={style.tag}>react-base-ts</span>
          <span className={style.tag}>Public Template</span>
        </div>
        <div className={style.ActionWrapper}>
          <ShareIcon className={style.Icon}>
            <input type="hidden" value={`https://stactw3protocol.netlify.app/${template}`}></input>
          </ShareIcon>
          <button className={style.button} onClick={() => templatetitle(template)}>
            Download <DownloadIcon sx={{ fontSize: 16 }} />
          </button>
          <button
            className={style.button}
            onClick={() => {
              modalOpen(template);
            }}
          >
            Clone <GitHubIcon sx={{ fontSize: 16 }} />
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalContainer title={template} setTemplate={setTemplate} template={template} />
          </Modal>
        </div>
      </div>
      <div className={style.DecsriptionContainer}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
      <span>Dependencies (23)</span>
      <div className={style.TagsContainer}>
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
