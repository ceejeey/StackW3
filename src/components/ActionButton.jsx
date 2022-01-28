import React from 'react';
import * as style from './ActionButton_style.css';
import Tooltip from '@mui/material/Tooltip';

function ActionButton(props) {
  const { icon, dataHandler, template, buttonName, button, tooltipStatus } = props;
  return (
    <Tooltip title={tooltipStatus} placement="top-start">
      <button
        className={button === 'DetailsBtn' ? style.button : style.Iconbackground}
        onClick={() => {
          dataHandler(template);
        }}
      >
        {buttonName}
        {icon}
      </button>
    </Tooltip>
  );
}

export default ActionButton;
