import React from 'react';

import * as style from './Card_style.css';

function Tag(props) {
  return <div className={style.Tag}>{props.label}</div>;
}

export default Tag;
