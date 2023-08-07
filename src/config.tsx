export const deployments = require('../status.json');
export const awsImageUrl = 'https://runner-whistle.s3.ap-northeast-2.amazonaws.com/image/';
export const awsSvgUrl = 'https://runner-whistle.s3.ap-northeast-2.amazonaws.com/svg/';
export const awsAccessKey = 'AKIAVDAJX3J7ZWTUVBNO';
export const awsSecretKey = '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';
export const getSize = 29;

export const getDomain = async () => {
  switch (deployments.status) {
    case 'dev':
      return 'http://127.0.0.1:3001/';
    case 'qa':
      return 'https://qa.runner.company/';
    case 'product': {
      return 'https://raid.runner.company/';
    }
    default:
      return 'https://dev.runner.company/';
  }
};

export const awsOptions = (folder = 'requestExpert') => {
  return {
    keyPrefix: `${folder}/`,
    bucket: 'runner-whistle',
    region: 'ap-northeast-2',
    accessKey: awsAccessKey,
    secretKey: awsSecretKey,
    successActionStatus: 201,
  };
};
