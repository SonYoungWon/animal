import {atom} from 'recoil';
import {ADD_CAT_TYPE} from '../../screen/types';
import {CreateAnimalCompanionDto, CreateAnimalCompanionDtoDefault} from '../dto/animalCompanionDto';
import {UserDefault, UserDto} from '../dto/userDto';

export const splashState = atom<boolean>({
  key: 'splashState',
  default: false,
});

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
});

export const tokenState = atom<string>({
  key: 'tokenState',
  default: '',
});

export const myState = atom<UserDto>({
  key: 'myState',
  default: UserDefault,
});

export const addCatInfo = atom<CreateAnimalCompanionDto>({
  key: 'addCatInfo',
  default: CreateAnimalCompanionDtoDefault,
});

export const addCatType = atom<ADD_CAT_TYPE>({
  key: 'addCatType',
  default: 'NAME',
});

export const catTypes = atom<{id: number; name: string; animal: number}[]>({
  key: 'catTypes',
  default: [{id: -1, name: '', animal: -1}],
});

export const addCatComplete = atom<boolean>({
  key: 'addCatComplete',
  default: false,
});
