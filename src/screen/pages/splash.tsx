import React from 'react';
import {screenHeight, screenWidth} from '../../common/utill';
import {Lottie} from '../atom/view';

export default () => {
  return <Lottie type={'Logo'} width={screenWidth} height={screenHeight} />;
};
