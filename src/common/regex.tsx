// <a>excemple</a> 태그 정규식
export const ATagStartRegex = /<a[^>]*>/gi;
export const ATagEndRegex = /<\/a>/gi;

export const ATagRegex = /(<a[^>]*>(.*?)<\/a>)/gi;
export const ATagRege1 = /<a[^>]*>(.*?)<\/a>/gi;

export const httpRegex = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
export const hrefRegex = /(href=)(\'|\")?([^<>\s\'\"]*)(\'|\"|\s|)/gi;

export const numberRegex = /[0-9]/; //숫자
export const enRegex = /[a-zA-Z]/; //영어
export const krRegex = /[ㄱ-ㅎ|가-힣]/gi; //한글
export const specialRegex = /[~!@#\#$%<>^&*]/; //특수문자
