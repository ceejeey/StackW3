import React from 'react';
import Button from './Button';
import * as style from './Content_style.css';
import Tag from './Tag';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import ModalContainer from './ModalContainer';
import Alert from './Alert';

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

function Card(props) {
  const { description, title, tags } = props;

  const [template, setTemplate] = useState('');

  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTemplate(title);
  }, [template]);

  const templatetitle = (index) => {
    setTemplate(index);
    const url = `https://github.com/ceejeey/${template}/archive/refs/heads/main.zip`;
    downloadFromAnchor(url);
    setAlert(true);
  };

  const modalOpen = (index) => {
    setTemplate(index);
    handleOpen();
  };

  return (
    <>
      <div className={style.Container}>
        <div className={style.HeaderContainer}>
          <div className={style.HeaderWrap}>
            <span className={style.Title}>{title}</span>
          </div>
          <div className={style.IconContainer}>
            <div className={style.IconWrap}>
              <div
                className={style.Iconbackground}
                onClick={() => {
                  modalOpen(title);
                }}
              >
                <i class="fab fa-github fa-1x"></i>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <ModalContainer setTemplate={setTemplate} template={template} title={title} />
              </Modal>
              <div className={style.Iconbackground} onClick={() => templatetitle(title)}>
                <i class="fas fa-download fa-1x"></i>
              </div>
              <Alert message={'Download Successful!'} alert={alert} />
            </div>
          </div>
        </div>
        <div className={style.Para}>
          <span>{description}</span>
        </div>
        <div className={style.Action}>
          <div className={style.Tags}>
            {tags.map((tag) => (
              <Tag label={tag} />
            ))}
          </div>
          <div className={style.ButtonsContainer}>
            <Link to={`/${title}`}>
              <Button label="More Details" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
