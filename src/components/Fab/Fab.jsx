import React from 'react';
import * as style from './Fab_style.css';
import Tooltip from '@mui/material/Tooltip';

function Fab(props) {
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

export default Fab;
