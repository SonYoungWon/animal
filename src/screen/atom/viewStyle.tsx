import {screenHeight} from '../../common/utill';

const LOTTIE_FULL_SCREEN_STYLE = {
  height: screenHeight,
  alignSelf: 'center',
  position: 'absolute',
  zIndex: 1002,
};

export const LOTTIE_STYLE: any = {
  Logo: LOTTIE_FULL_SCREEN_STYLE,
  Check: LOTTIE_FULL_SCREEN_STYLE,
  Loading: LOTTIE_FULL_SCREEN_STYLE,
  Alarm: {},
  Research: {},
  Like: LOTTIE_FULL_SCREEN_STYLE,
};
