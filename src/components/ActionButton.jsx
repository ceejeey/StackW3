import React from 'react';
import * as style from './ActionButton_style.css';
import Tooltip from '@mui/material/Tooltip';

function ActionButton(props) {
  const { icon, dataHandler, data, buttonName, tooltipStatus } = props;
  return (
    <Tooltip title={tooltipStatus} placement="top-start">
      <button
        className={style.Iconbackground}
        onClick={() => {
          dataHandler(data);
        }}
      >
        {buttonName === 'codeSandBox' ? <span className={style.IconSandBox}>{icon}</span> : <>{icon}</>}
      </button>
    </Tooltip>
  );
}

export default ActionButton;
