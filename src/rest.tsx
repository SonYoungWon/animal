import {deleteAxios, getAxios, patchAxios, postAxios, putAxios} from './common/axios';
import {CreateAnimalCompanionDto} from './global/dto/animalCompanionDto';
import {AnimalFeed} from './global/dto/animalFeed';

// =========================================== GET ===========================================
export const myInfo = async () => {
  const myInfo: any = await getAxios('user');
  return myInfo;
};

export const myAnimalCount = async (userId: number) => {
  const count: any = await getAxios(`animal-companion/count?user=${userId}`);
  return count;
};

export const petTypes = async () => {
  const petType: any = await getAxios(`animal-type`);
  return petType;
};

export const userAllFeed = async (type: 'USER' | 'ALL', userId?: number) => {
  const feeds: AnimalFeed[] = await getAxios(`animal-feed/${type}?userId=${userId}`);
  return feeds;
};

// =========================================== POST ===========================================
export const createPetCompanion = async (CreateAnimalCompanionDto: CreateAnimalCompanionDto) => {
  let data = await postAxios(`animal-companion`, CreateAnimalCompanionDto);
  return data;
};

// =========================================== PUT ===========================================
export const chatConnect = async (roomId: number, roomUid: string) => {
  let data = await putAxios(`pusher`, `roomId=${roomId}&roomUid=${roomUid}&activeUsers=${JSON.stringify({})}`);
};

// =========================================== Delete ===========================================
export const chatDisconnect = async (roomId: number, roomUid: string) => {
  await deleteAxios(`pusher`, `roomUid=${roomUid}`);
};

// =========================================== PATCH ===========================================
export const updateChatRead = async (roomId: number) => {
  let data = await patchAxios(`message/read`, `roomId=${roomId}`);
};
