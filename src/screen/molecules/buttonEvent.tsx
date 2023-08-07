import AsyncStorage from '@react-native-async-storage/async-storage';
import {KakaoOAuthToken, KakaoOAuthWebToken, login} from '@react-native-seoul/kakao-login';
import axios from 'axios';
import {SetterOrUpdater} from 'recoil';
import {STORAGE_TYPE} from '../../common/storage';
import {getDomain} from '../../config';

export const signInWithKakao = async (setToken: SetterOrUpdater<string>): Promise<void> => {
  try {
    const token: KakaoOAuthToken | KakaoOAuthWebToken = await login();
    const serverDomain = await getDomain();
    const url = `${serverDomain}auth/login/kakao`;
    const options = {accessToken: token.accessToken};
    const result = await axios.post(url, options);
    await AsyncStorage.setItem(STORAGE_TYPE.LOGIN_TOKEN, result.data.access_token);
    setToken(JSON.stringify(result.data.access_token));
  } catch (e) {
    console.error('kakaoErrer: ', e);
  }
};
