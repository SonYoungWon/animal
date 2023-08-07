import {useNavigation as navigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import {Loadable, SetterOrUpdater} from 'recoil';
import {CreateAnimalCompanionDto} from '../global/dto/animalCompanionDto';
import {ADD_CAT_TYPE, DATE_FORMAT, NavigationProps, simpleWeek, week} from '../screen/types';

export const asyncResult = (loadable: Loadable<any>) => {
  switch (loadable.state) {
    case 'hasError': {
      return false;
    }
    case 'loading': {
      return false;
    }
    case 'hasValue': {
      return loadable.contents;
    }
  }
};
export const addCatMove = (
  action: 'GO' | 'BACK',
  addType: ADD_CAT_TYPE,
  setAddType: SetterOrUpdater<ADD_CAT_TYPE>,
  navigation?: NavigationProps,
) => {
  if (action === 'BACK') {
    addCatBack(addType, setAddType);
  } else if (action === 'GO') {
    if (navigation) addCatGo(addType, setAddType);
  }
};

export const addTypes = ['NAME', 'GENDER', 'WEIGHT', 'TYPE', 'BIRTH', 'IMAGE'];

const addCatBack = (addType: ADD_CAT_TYPE, setAddType: SetterOrUpdater<ADD_CAT_TYPE>) => {
  const currentIndex = addTypes.indexOf(addType);
  // @ts-ignore
  if (addType !== 'NAME') setAddType(addTypes[currentIndex - 1]);
};

export const addCatGo = (addType: ADD_CAT_TYPE, setAddType: SetterOrUpdater<ADD_CAT_TYPE>) => {
  const currentIndex = addTypes.indexOf(addType);
  // @ts-ignore
  setAddType(addTypes[currentIndex + 1]);
};

export const requireCheck = (addType: ADD_CAT_TYPE, addInfo: CreateAnimalCompanionDto) => {
  switch (addType) {
    case 'NAME':
      return addInfo.name !== '' ? false : true;
    case 'GENDER':
      return addInfo.gender !== '' ? false : true;
    case 'WEIGHT':
      return addInfo.weight !== 0 ? false : true;
    case 'TYPE':
      return addInfo.type !== -1 ? false : true;
    case 'BIRTH':
      return addInfo.birth !== null ? false : true;
    case 'IMAGE':
      return false;
  }
};

export const formatTime = (
  date: Date,
  format:
    | 'HHSS'
    | 'DAYHHSS'
    | `WEEK`
    | `SIMPLE_WEEK`
    | `MMDD_WEEK`
    | `MMDD_WEEK_TIME`
    | 'YYMM_STRING'
    | 'YYMMDD_DOT'
    | 'YYYYMM_DOT'
    | 'YYYYMMDD'
    | 'YYYYMMDD_HHMM_STRING'
    | 'YYYYMMDD_HHMM_CHAR'
    | 'YYYYMMDD_CHAR'
    | 'YYYYMMDD_DOT'
    | 'YYYYMMDD_DOT_TIME'
    | 'YYYYMMDD_STRING'
    | 'YYYYMMDD_WEEK_STRING'
    | 'YYYYMMDD_FULL_WEEK_STRING',
) => {
  let d = new Date(date),
    nextDay = format === DATE_FORMAT.YYYYMMDD_WEEK_STRING ? (d.getHours() < 10 ? 0 : 1) : 0, // 00~10시이면 당일예약이므로 이후면 다음날이므로 1
    month = '' + (d.getMonth() + 1),
    day = '' + (d.getDate() + nextDay),
    year = d.getFullYear(),
    hour = d.getHours(),
    min = d.getMinutes();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  const weekIndex = new Date(date).getDay() + nextDay;
  const dayOfWeek = week[weekIndex > 6 ? 0 : weekIndex];
  const dayOfSimpleWeek = simpleWeek[weekIndex > 6 ? 0 : weekIndex];
  switch (format) {
    case DATE_FORMAT.MMDD_WEEK_TIME:
      return `${month}/${day}(${dayOfWeek.replace('요일', '')}) ${hour < 12 ? '오전' : '오후'} ${
        hour < 13 ? hour : twoDigitsConverter(hour - 12)
      }:${twoDigitsConverter(min)}`;
    case DATE_FORMAT.MMDD_WEEK:
      return `${month}/${day}(${dayOfWeek.replace('요일', '')})`;
    case DATE_FORMAT.YYYYMMDD:
      return `${year}${month}${day}`;
    case DATE_FORMAT.HHSS:
      return `${twoDigitsConverter(hour)}:${twoDigitsConverter(min)}`;
    case DATE_FORMAT.DAYHHSS:
      return `${hour < 12 ? '오전' : '오후'} ${hour <= 12 ? hour : twoDigitsConverter(hour - 12)}:${twoDigitsConverter(
        min,
      )}`;
    case DATE_FORMAT.YYYYMM_DOT:
      return `${year}.${month}`;
    case DATE_FORMAT.YYYYMMDD_CHAR:
      return `${year}-${month}-${day}`;
    case DATE_FORMAT.YYMM_STRING:
      return `${year}년 ${month}월`;
    case DATE_FORMAT.YYMMDD_DOT:
      return `${year.toString().substring(2, 4)}.${month}.${day}`;
    case DATE_FORMAT.YYYYMMDD_DOT:
      return year + '.' + month + '.' + day;
    case DATE_FORMAT.YYYYMMDD_DOT_TIME:
      return (
        year +
        '.' +
        month +
        '.' +
        day +
        ' ' +
        `${hour < 12 ? '오전' : '오후'} ${hour < 12 ? hour : twoDigitsConverter(hour - 12)}시 ${twoDigitsConverter(
          min,
        )}분`
      );
    case DATE_FORMAT.YYYYMMDD_HHMM_CHAR:
      return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
    case DATE_FORMAT.YYYYMMDD_HHMM_STRING:
      return year + '년 ' + month + '월 ' + day + '일 ' + hour + '시 ' + min + '분';
    case DATE_FORMAT.YYYYMMDD_STRING:
      return year + '년 ' + month + '월 ' + day + '일';
    case DATE_FORMAT.YYYYMMDD_WEEK_STRING:
      return year + '년 ' + month + '월 ' + day + '일 ' + dayOfWeek;
    case DATE_FORMAT.WEEK:
      return dayOfWeek;
    case DATE_FORMAT.SIMPLE_WEEK:
      return dayOfSimpleWeek;
    case DATE_FORMAT.YYYYMMDD_FULL_WEEK_STRING:
      return year + '년 ' + month + '월 ' + day + '일 ' + dayOfWeek + ' ' + hour + '시 ' + min + '분';
  }
  return '';
};

const twoDigitsConverter = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

export const imageOnPress = (setImage: any) => {
  ImagePicker.openPicker({
    waitAnimationEnd: false,
    sortOrder: 'asc',
    cropping: true,
    cropperCancelText: '취소',
    cropperChooseText: '확인',
    freeStyleCropEnabled: true,
    width: 1000,
    height: 1000,
    forceJpg: true,
    mediaType: 'photo',
    compressImageQuality: 0.8,
    loadingLabelText: '사진을 가져오고 있습니다.',
  })
    .then(async (imgs) => {
      setImage(imgs);
    })
    .catch((e) => {
      console.error(e);
      if (e.toString() === 'Error: Cannot find image data') {
        Toast.show({
          type: 'success',
          text1: '자르기를 지원하지 않는 이미지입니다.',
        });
      }
      console.error('취소');
    });
};

export const localImageUrl = (image: any) => {
  if (image.path === '' && image.sourceURL !== '') {
    return image.sourceURL;
  }
  if (Platform.OS === 'ios') {
    if (image.sourceURL) {
      const mime: string = image.filename.split('.')[1];
      if (mime.toUpperCase() === 'GIF') {
        return image.sourceURL;
      } else if (mime.toUpperCase() === 'HEIC') {
        return image.sourceURL;
      } else {
        return `file://${image.path}`;
      }
    } else {
      return image.path;
    }
  } else {
    return image.path;
  }
};

export const useNavigation = navigation<NavigationProps>;

export const restApi = async (setLoading: SetterOrUpdater<boolean>, api: () => void) => {
  setLoading(true);
  api();
  setLoading(false);
};

export const jsonToArray = (val: string) => {
  return JSON.parse(val);
};
