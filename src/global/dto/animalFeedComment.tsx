import {AnimalFeed} from './animalFeed';
import {UserDto} from './userDto';

export interface AnimalFeedComment {
  id: number;
  content: string;
  groupId: number;
  isDeleted: boolean;
  children: AnimalFeedComment[];
  parent: AnimalFeedComment[];
  writer: UserDto;
  feed: AnimalFeed;
  likes: UserDto[];
  createdAt: Date;
}
