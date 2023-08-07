import {AnimalCompanionDto} from './animalCompanionDto';
import {AnimalFeedComment} from './animalFeedComment';
import {UserDto} from './userDto';

export interface AnimalFeed {
  id: number;
  weight?: string;
  images?: string;
  video?: string;
  hospitalDescription?: string;
  hospitalImages?: string;
  dryToEat?: string;
  wetToEat?: string;
  foodCompany?: string;
  description: string;
  likes: UserDto[];
  comments: AnimalFeedComment[];
  companion: AnimalCompanionDto;
  user: UserDto;
  writeredAt: Date;
  createdAt: Date;
}
