import React from 'react';
import Lottie from 'react-lottie';
import LottieLoading from './Assets/Loading.json';
import * as style from './Modal_style.css';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className={style.LoadingContainer}>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default Loading;
