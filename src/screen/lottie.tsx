const LogoLottie = require('../../assets/lottie/Splash.json');
const CheckLottie = require('../../assets/lottie/Complete.json');
const AlarmLottie = require('../../assets/lottie/Icon_Alram_Black_Reddot.json');
const ResearchLottie = require('../../assets/lottie/Main_Research_Button.json');
const LikeLottie = require('../../assets/lottie/Entire_Heart.json');
const LoadingLottie = require('../../assets/lottie/loading.json');
const ErrorLottie = require('../../assets/lottie/error.json');
const AddCatLottie = require('../../assets/lottie/addCat.json');

export type LOTTIE = keyof typeof LOTTIE;
export const LOTTIE = {
  Logo: LogoLottie,
  Check: CheckLottie,
  Loading: LoadingLottie,
  Alarm: AlarmLottie,
  Research: ResearchLottie,
  Like: LikeLottie,
  Error: ErrorLottie,
  AddCat: AddCatLottie,
};
