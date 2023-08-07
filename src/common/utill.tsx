import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const DAUM_REST_KEY = '64ffadb2da71168e6a7da5e2403c6ae9';

export const deviceInfo = DeviceInfo.getDeviceId();

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
