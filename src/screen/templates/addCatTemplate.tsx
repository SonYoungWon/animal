import React from 'react';
import {Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {defaultProfileImage} from '../../common/config';
import {addCatGo, requireCheck, restApi, useNavigation} from '../../common/function';
import {addCatInfo, addCatType, loadingState} from '../../global/recoil/atoms';
import {createPetCompanion} from '../../rest';
import {FlexPressable, FlexView} from '../atom/styled';
import {BottomButtonView} from '../molecules/view';
import SvgAndContentAndInput from '../organisms/svgAndContentAndInput';
import {COLOR} from '../types';

export default () => {
  const navigation = useNavigation();
  const [addType, setAddType] = useRecoilState(addCatType);
  const setLoading = useSetRecoilState(loadingState);
  const catInfo = useRecoilValue(addCatInfo);

  const createCompanion = async () => {
    const cat = {...catInfo, image: catInfo.image ? catInfo.image : defaultProfileImage};
    const result = await createPetCompanion(cat);
    if (result) {
      navigation.navigate('Main');
    } else {
      Toast.show({text1: '등록을 실패했습니다.'});
    }
  };

  const onPress = async () => {
    if (addType === 'IMAGE') {
      restApi(setLoading, createCompanion);
    } else {
      addCatGo(addType, setAddType);
    }
  };

  return (
    <FlexPressable onPress={() => Keyboard.dismiss()} style={{backgroundColor: COLOR.WHITE}}>
      <FlexView>
        <SvgAndContentAndInput type={addType} />
      </FlexView>
      <BottomButtonView
        text={addType === 'IMAGE' ? '완료' : '다음으로'}
        disabled={requireCheck(addType, catInfo)}
        onPress={onPress}
      />
    </FlexPressable>
  );
};
