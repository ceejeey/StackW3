import React from 'react';
import * as style from './Modal_style.css';
import { useState } from 'react';

function OptionCard(props) {
  const { card, id, setVisibility, visibility, desc } = props;

  const repovisibility = (value) => {
    setVisibility(value);
  };

  return (
    <div>
      <label for={id}>
        <div
          className={style.VisibilityContainer}
          style={{ backgroundColor: visibility === card ? '#060606' : '#0F0F0F' }}
        >
          <div className={style.VisibilityWrapper}>
            {card}
            <label for={id} className={style.Description}>
              {desc}
            </label>
          </div>
          <div class="RadioContainer">
            <input
              class="Radio"
              type="radio"
              id={id}
              name="fname"
              value={card}
              required
              checked={visibility === card ? 'checked' : ''}
              onClick={() => repovisibility(card)}
            ></input>
            <div className={style.Radio} class="Radio__Radio"></div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default OptionCard;
