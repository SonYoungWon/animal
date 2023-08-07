import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValueLoadable, useSetRecoilState} from 'recoil';
import {defaultProfileImage} from '../../common/config';
import {imageOnPress, localImageUrl} from '../../common/function';
import {AnimalType} from '../../global/dto/animalType';
import {addCatInfo} from '../../global/recoil/atoms';
import {catTypesSelector} from '../../global/recoil/selector';
import {BasicButton, Chip} from '../atom/button';
import {AlignView, FlexView, HorizontalPadding, RowView, VerticalPadding, View} from '../atom/styled';
import {Text, TextInput} from '../atom/text';
import {Lottie} from '../atom/view';
import {LOTTIE} from '../lottie';
import {MultiLineText} from '../molecules/text';
import {ProfileImage} from '../molecules/view';
import {brandColor} from '../styled';
import {ADD_CAT_TYPE, COLOR, GENDER_TYPE, TEXT_SIZE, WEIGHT} from '../types';

export default ({type}: {type: ADD_CAT_TYPE}) => {
  return (
    <View>
      <Lottie type={LOTTIE.AddCat} width={150} speed={1} loop />
      <HorizontalPadding>
        {type === 'NAME' && <AddName />}
        {type === 'GENDER' && <AddGender />}
        {type === 'WEIGHT' && <AddWeight />}
        {type === 'TYPE' && <AddType />}
        {type === 'BIRTH' && <AddBirth />}
        {type === 'IMAGE' && <AddImage />}
      </HorizontalPadding>
    </View>
  );
};

const AddName = () => {
  const setCatInfo = useSetRecoilState(addCatInfo);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    setCatInfo((info) => ({...info, name: searchText}));
  }, [searchText]);

  return (
    <View>
      <MultiLineText
        texts={['아이의 이름은 무엇인가요?']}
        textStyles={[{fontSize: TEXT_SIZE.size4, fontWeight: WEIGHT.BOLD, color: COLOR.BLACK}]}
      />
      <VerticalPadding value={14} />
      <TextInput placeholder={'냐옹'} searchText={searchText} setSearchText={setSearchText} isBorderBottom />
    </View>
  );
};

const AddWeight = () => {
  const [catInfo, setCatInfo] = useRecoilState(addCatInfo);
  const [weight, setWeight] = useState('');
  useEffect(() => {
    setCatInfo((info) => ({...info, weight: +weight}));
  }, [weight]);

  return (
    <View>
      <MultiLineText
        texts={[`${catInfo.name}이의 몸무게는 어떻게 되나요?`]}
        textStyles={[{fontSize: TEXT_SIZE.size4, fontWeight: WEIGHT.BOLD, color: COLOR.BLACK}]}
      />
      <VerticalPadding value={14} />
      <RowView>
        <View style={{width: 50}}>
          <TextInput
            placeholder={'0'}
            searchText={weight}
            setSearchText={setWeight}
            textAlign={'center'}
            isBorderBottom
          />
        </View>
        <Text text="kg" />
      </RowView>
    </View>
  );
};

const AddType = () => {
  const petTypes = useRecoilValueLoadable(catTypesSelector);
  const [typeIndex, setTypeIndex] = useState(0);
  const [catInfo, setCatInfo] = useRecoilState(addCatInfo);

  const onChange = (idx: number) => {
    setTypeIndex(idx);
    setCatInfo((info) => ({...info, type: petTypes.contents[typeIndex].id}));
  };

  return (
    <View>
      <MultiLineText
        texts={[`${catInfo.name}이는 어떤 아이인가요??`]}
        textStyles={[{fontSize: TEXT_SIZE.size4, fontWeight: WEIGHT.BOLD, color: COLOR.BLACK}]}
      />
      <VerticalPadding value={14} />
      <RowView style={{flexWrap: 'wrap'}}>
        {petTypes.state === 'hasValue' &&
          petTypes.contents.map((petType: AnimalType, index: number) => {
            return (
              <Chip
                key={`petTypes-${index}`}
                text={petType.name}
                viewStyles={typeIndex === index ? {backgroundColor: brandColor} : {}}
                textStyles={typeIndex === index ? {color: COLOR.DARK_GRAY_700} : {}}
                onPress={() => onChange(index)}
              />
            );
          })}
      </RowView>
    </View>
  );
};

const AddGender = () => {
  const [catInfo, setCatInfo] = useRecoilState(addCatInfo);
  const [gender, setGender] = useState(GENDER_TYPE.MALE);
  const onChange = (value: any) => {
    setGender(value);
    setCatInfo((info) => ({...info, gender: value}));
  };

  return (
    <View>
      <MultiLineText
        texts={[`${catInfo.name}이는 성별은 무엇인가요??`]}
        textStyles={[{fontSize: TEXT_SIZE.size4, fontWeight: WEIGHT.BOLD, color: COLOR.BLACK}]}
      />
      <VerticalPadding value={14} />
      <RowView>
        <FlexView>
          <BasicButton
            text="남"
            onPress={() => onChange(GENDER_TYPE.MALE)}
            type={gender === GENDER_TYPE.MALE ? 'SOLID' : 'OUTLINE'}
          />
        </FlexView>
        <HorizontalPadding value={4} />
        <FlexView>
          <BasicButton
            text="여"
            onPress={() => onChange(GENDER_TYPE.FEMALE)}
            type={gender === GENDER_TYPE.FEMALE ? 'SOLID' : 'OUTLINE'}
          />
        </FlexView>
      </RowView>
    </View>
  );
};

const AddBirth = () => {
  const [catInfo, setCatInfo] = useRecoilState(addCatInfo);
  const [birth, setBirth] = useState<Date>(new Date());

  const onChange = (event: any, date: Date | undefined) => {
    if (date) {
      setBirth(date);
      setCatInfo((info) => ({...info, birth: `${new Date(date).toISOString()}`}));
    }
  };

  return (
    <View>
      <MultiLineText
        texts={[`${catInfo.name}이는 몇살이예요?`]}
        textStyles={[{fontSize: TEXT_SIZE.size4, fontWeight: WEIGHT.BOLD, color: COLOR.BLACK}]}
      />
      <VerticalPadding value={14} />
      <DateTimePicker value={birth} mode={'date'} display={'inline'} onChange={onChange} />
    </View>
  );
};

const AddImage = () => {
  const [catInfo, setCatInfo] = useRecoilState(addCatInfo);
  const [image, setImage] = useState();
  const [imagePath, setImagePath] = useState(defaultProfileImage);

  const onPress = () => {
    imageOnPress(setImage);
  };

  useEffect(() => {
    if (image) setImagePath(localImageUrl(image));
  }, [image]);

  return (
    <View>
      <MultiLineText
        texts={[`우리 ${catInfo.name}이의`, '이쁜모습을 올려주세요!']}
        textStyles={[
          {fontSize: TEXT_SIZE.size4, fontWeight: WEIGHT.BOLD, color: COLOR.BLACK},
          {fontSize: TEXT_SIZE.size4, fontWeight: WEIGHT.BOLD, color: COLOR.BLACK, lineHeight: 30},
        ]}
      />
      <VerticalPadding value={14} />
      <AlignView>
        <ProfileImage uri={imagePath} editable={true} onPress={onPress} />
      </AlignView>
    </View>
  );
};
