import React from 'react';
import * as style from './ActionButton_style.css';

function ActionButton(props) {
  const { icon, dataHandler, template, buttonName, button } = props;
  return (
    <button
      className={button === 'DetailsBtn' ? style.button : style.Iconbackground}
      onClick={() => {
        dataHandler(template);
      }}
    >
      {buttonName}
      {icon}
    </button>
  );
}

export default ActionButton;
