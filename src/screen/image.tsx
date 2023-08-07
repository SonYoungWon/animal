const DailyCat = require('../../assets/image/dailyCat.png');
const HealthCat = require('../../assets/image/healthCat.png');
const SelectedDay = require('../../assets/image/selectDay.png');

export type IMAGE = keyof typeof IMAGE;
export const IMAGE = {
  DailyCat: DailyCat,
  HealthCat: HealthCat,
  SelectedDay: SelectedDay,
};
