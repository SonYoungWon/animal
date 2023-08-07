import {selector, selectorFamily} from 'recoil';
import {createPetCompanion, myAnimalCount, myInfo, petTypes, userAllFeed} from '../../rest';
import {addCatComplete, addCatInfo, myState} from './atoms';

export const oneUserSelector = selector({
  key: 'oneUserSelector',
  get: async ({get}) => {
    const user = await myInfo();
    if (user) {
      return user;
    } else {
      return false;
    }
  },
});

export const myPetCountSelector = selector({
  key: 'myPetCountSelector',
  get: async ({get}) => {
    const my = get(myState);
    const petCount = await myAnimalCount(my.id);
    if (petCount) {
      return petCount;
    } else {
      return false;
    }
  },
});

export const userFeedListSelector = selectorFamily({
  key: 'userFeedListSelector',
  get:
    ({type, userId}: {type: 'USER' | 'ALL'; userId?: number}) =>
    async ({get}) => {
      const petCount = await userAllFeed(type, userId);
      if (petCount) {
        return petCount;
      } else {
        return false;
      }
    },
});

export const catTypesSelector = selector({
  key: 'catTypesSelector',
  get: async ({get}) => {
    const petTypesResult = await petTypes();
    if (petTypesResult) {
      return petTypesResult;
    } else {
      return false;
    }
  },
});

export const createCatCompanionSelector = selector({
  key: 'createCatCompanionSelector',
  get: async ({get}) => {
    const isComplete = get(addCatComplete);
    const catInfo = get(addCatInfo);
    if (isComplete) {
      const result = await createPetCompanion(catInfo);
      if (result) {
        return true;
      } else {
        return false;
      }
    }
  },
});
