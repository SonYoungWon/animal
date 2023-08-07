import {GENDER_TYPE} from '../../screen/types';
import {UserDto} from './userDto';

export interface AnimalCompanionDto {
  id: number;
  name: string;
  gender: GENDER_TYPE;
  birth: Date;
  type: number;
  weight: number;
  image: string;
  backgroundImages: string;
  coords: string;
  follower?: UserDto[];
  user: number;
  createdAt: Date;
}

export interface CreateAnimalCompanionDto {
  name: string;
  gender: string;
  birth: string | '';
  type: number;
  weight: number;
  image: string;
}

export const CreateAnimalCompanionDtoDefault = {
  name: '',
  gender: GENDER_TYPE.MALE,
  birth: '',
  type: -1,
  weight: 0,
  image: '',
};
