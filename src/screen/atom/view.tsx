import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {Loadable, useRecoilValue} from 'recoil';
import {screenHeight, screenWidth} from '../../common/utill';
import {loadingState} from '../../global/recoil/atoms';
import {LOTTIE} from '../lottie';
import {COLOR, TEXT_SIZE, WEIGHT} from '../types';
import {VIDEO} from '../video';
import {VerticalPadding, Video, View} from './styled';
import {Text} from './text';
import {LottieProp, SvgProp} from './viewProp';
import {LOTTIE_STYLE} from './viewStyle';

export const Svg = ({Image, size = 20}: SvgProp) => {
  return <Image width={size} height={size} />;
};

export const Lottie = ({
  type,
  width,
  height,
  autoPlay = true,
  speed = 1,
  loop = false,
  autoSize = true,
  style,
}: LottieProp) => {
  return (
    <View style={(LOTTIE_STYLE[type], style)}>
      <AnimatedLottieView
        source={type}
        autoPlay={autoPlay}
        speed={speed}
        loop={loop}
        autoSize={autoSize}
        style={{
          width: width,
          height: height ? height : width,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export const VideoBackgrounds = () => {
  return <Video source={VIDEO.LoginVideo} resizeMode={'cover'} repeat={true} style={{position: 'absolute'}} />;
};

export const Loading = () => {
  const loading = useRecoilValue(loadingState);
  if (loading === false) {
    return <></>;
  }
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        width: screenWidth,
        height: screenHeight,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}>
      <Lottie type={LOTTIE.Loading} width={150} height={150} speed={2} loop />
    </View>
  );
};

export const LoadingView = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}>
      <Lottie type={LOTTIE.Loading} width={150} height={150} speed={2} loop />
    </View>
  );
};

export const Error = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.WHITE,
      }}>
      <Lottie type={LOTTIE.Error} width={150} height={150} speed={2} loop />
      <Text text="인터넷 연결을 확인하세요" style={{color: COLOR.GRAY_900, fontWeight: WEIGHT.MEDIUM}} />
      <VerticalPadding value={4} />
      <Text text="네트워크 상태를 다시 확인하거나" style={{color: COLOR.GRAY_600, fontSize: TEXT_SIZE.size2}} />
      <Text text="앱 담당자에게 문의해주세요" style={{color: COLOR.GRAY_600, fontSize: TEXT_SIZE.size2}} />
    </View>
  );
};

export const AsyncView = ({
  loadable,
  children,
  errorChildren,
}: {
  loadable: Loadable<any>;
  children: JSX.Element;
  errorChildren?: JSX.Element;
}) => {
  switch (loadable.state) {
    case 'hasError': {
      if (errorChildren) {
        return errorChildren;
      }
      return <Error />;
    }
    case 'loading': {
      return <LoadingView />;
    }
    case 'hasValue': {
      return children;
    }
  }
};
