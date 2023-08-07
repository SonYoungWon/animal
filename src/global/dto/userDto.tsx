import {SOCIAL_LOGIN_TYPE} from '../../screen/types';
import {AnimalCompanionDto} from './animalCompanionDto';
import {AnimalFeed} from './animalFeed';
import {AnimalFeedComment} from './animalFeedComment';

export interface UserDto {
  id: number;
  uid: string;
  email?: string;
  nick: string;
  social?: SOCIAL_LOGIN_TYPE;
  image: string;
  backgroundImage?: string;
  introduce?: string;
  grade: number;
  point: number;
  follower: UserDto[];
  following: UserDto[];
  animalFollowing: AnimalCompanionDto[];
  feedLikes: AnimalFeed[];
  feedComments: AnimalFeedComment[];
  feedCommentLikes: AnimalFeedComment[];
  animal: AnimalCompanionDto[];
  lastAccessedAt: Date;
  updatedAt: Date;
  createdAt: Date;
}

export const UserDefault = {
  id: -1,
  uid: '',
  email: '',
  nick: '',
  image: '',
  backgroundImage: '',
  introduce: '',
  grade: -1,
  point: -1,
  follower: [],
  following: [],
  animalFollowing: [],
  feedLikes: [],
  feedComments: [],
  feedCommentLikes: [],
  animal: [],
  lastAccessedAt: new Date(),
  updatedAt: new Date(),
  createdAt: new Date(),
};
