import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import {addCatMove} from '../common/function';
import {addCatType} from '../global/recoil/atoms';
import {myPetCountSelector} from '../global/recoil/selector';
import {BackButton} from '../screen/atom/button';
import {AsyncView} from '../screen/atom/view';
import AddCat from '../screen/pages/addCat';
import Main from '../screen/pages/main';

export type DefaultStackParamList = {
  Main: undefined;
  AddCat: undefined;
};

export type NavigationProp = NativeStackNavigationProp<DefaultStackParamList>;

const Default = createNativeStackNavigator<DefaultStackParamList>();

export default () => {
  const petCount = useRecoilValueLoadable(myPetCountSelector);
  const [addType, setAddType] = useRecoilState(addCatType);
  return (
    <SafeAreaView style={{flex: 1}}>
      <AsyncView loadable={petCount}>
        <NavigationContainer>
          <Default.Navigator
            screenOptions={{animation: 'none'}}
            initialRouteName={+petCount.contents > 0 ? 'Main' : 'AddCat'}>
            <Default.Screen name={'Main'} component={Main} options={{headerShown: false}} />
            <Default.Screen
              name={'AddCat'}
              component={AddCat}
              options={{
                headerTitle: '반려묘 등록',
                headerBackVisible: true,
                headerLeft: () => <BackButton onPress={() => addCatMove('BACK', addType, setAddType)} />,
              }}
            />
          </Default.Navigator>
        </NavigationContainer>
      </AsyncView>
    </SafeAreaView>
  );
};
