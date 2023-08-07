import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {CancelTokenSource} from 'axios';
import Toast from 'react-native-toast-message';
import {getDomain} from '../config';
import {STORAGE_TYPE} from './storage';

export const asyncStorageString = (value: any): string => {
  return value !== null ? JSON.parse(value) : '';
};

interface ApiResponseProp {
  status: number;
  result: {
    success?: any;
    error?: string;
  };
}

export const getAxios = async (api: string, source?: CancelTokenSource): Promise<any> => {
  try {
    const token: any = await AsyncStorage.getItem(STORAGE_TYPE.LOGIN_TOKEN);
    const serverDomain = await getDomain();
    const url = `${serverDomain}${api}`;
    const options = token ? {headers: {Authorization: `Bearer ${token}`}} : {};
    const result = await axios.get(url, options);
    return apiResult(result.data, api);
  } catch (e) {
    throw new Error('axios Error');
  }
};
export const putAxios = async (api: string, param: string, data?: object): Promise<any> => {
  try {
    const token: any = await AsyncStorage.getItem(STORAGE_TYPE.LOGIN_TOKEN);
    const serverDomain = await getDomain();
    const url = `${serverDomain}${api}?${param}`;
    const options = token ? {headers: {Authorization: `Bearer ${token}`}} : {};
    const result = await axios.put(url, data, options);
    return apiResult(result.data, api);
  } catch (e) {
    console.error(e);
  }
};

export const deleteAxios = async (api: string, param: string): Promise<any> => {
  try {
    const token: any = await AsyncStorage.getItem(STORAGE_TYPE.LOGIN_TOKEN);
    const serverDomain = await getDomain();
    const url = `${serverDomain}${api}?${param}`;
    const options = token ? {headers: {Authorization: `Bearer ${token}`}} : {};
    const result = await axios.delete(url, options);
    return apiResult(result.data, api);
  } catch (e) {
    console.error(e);
  }
};

export const patchAxios = async (api: string, param: string): Promise<any> => {
  try {
    const token: any = await AsyncStorage.getItem(STORAGE_TYPE.LOGIN_TOKEN);
    const serverDomain = await getDomain();
    const url = `${serverDomain}${api}?${param}`;
    const options = token ? {headers: {Authorization: `Bearer ${token}`}} : {};
    const result = await axios.patch(url, null, options);
    return apiResult(result.data, api);
  } catch (e) {
    console.error(e);
  }
};

export const postAxios = async (api: string, param: object): Promise<any> => {
  try {
    const token: any = await AsyncStorage.getItem(STORAGE_TYPE.LOGIN_TOKEN);
    const serverDomain = await getDomain();
    const url = `${serverDomain}${api}`;
    const options = token ? {headers: {Authorization: `Bearer ${token}`}} : {};
    const result = await axios.post(url, param, options);
    return apiResult(result?.data, api);
  } catch (e) {
    console.error('Error: ', e);
  }
};

const apiResult = (data: ApiResponseProp, api: string) => {
  if (data.result.error) {
    console.error(`Whistle api load error!! -> this api "${api}" error`);
    console.error(`Whistle error detail -> ${data.result.error}`);
    Toast.show({
      type: 'success',
      text1: data.result.error,
    });
  }
  return data.result.success;
};

export interface paramTypes {
  id?: number;
}
