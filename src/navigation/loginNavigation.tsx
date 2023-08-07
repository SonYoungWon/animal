import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from '../screen/pages/login';

export type LoginStackParamList = {
  Login: undefined;
};

export type NavigationProp = NativeStackNavigationProp<LoginStackParamList>;

const Stack = createNativeStackNavigator<LoginStackParamList>();

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{animation: 'none'}} initialRouteName={'Login'}>
          <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
