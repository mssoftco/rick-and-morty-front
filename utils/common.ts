import { NextRouter } from 'next/router';
import { LocationFilterType } from '@/types/location';
import { CharacterFilterType } from '@/types/character';

export function getEpisodesIds(episodes: string[] | undefined) {
  return episodes?.map(urlEpisode => +urlEpisode?.split('/episode/')[1]);
}

export function getLocationId(urlLocation: string | undefined) {
  return urlLocation?.split('/location/')[1];
}

export function getCharactersIds(characters: string[] | undefined) {
  return characters?.map(urlCharacter => +urlCharacter?.split('/character/')[1]);
}

export function getPageNumberOfApiQuery(apiUrl: string | undefined | null) {
  if (!apiUrl) return null;
  const queryString = apiUrl?.split('?')[1];
  return queryParamsToObject(queryString).page;
}

export const getAvailableCharacterQueryParameters = (router: NextRouter) => {
  const page = +(router.query?.page || 1);
  const name = router.query?.name?.toString();
  const gender = router.query?.gender?.toString();
  return { page, name, gender };
};

export const getAvailableLocationQueryParameters = (router: NextRouter) => {
  const page = +(router.query?.page || 1);
  const name = router.query?.name?.toString();
  return { page, name };
};

export function objectToQueryString(obj: any) {
  const queryString = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
      queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }
  return queryString.join('&');
}

export function queryParamsToObject(url: string) {
  const data: { [key: string]: any } = {};
  url
    .replace(/\/\?/, '')
    .split('&')
    .map(x => x.split('='))
    .forEach(x => {
      data[x[0]] = x[1];
    });
  return data;
}

export const getQueryWithName = (name: string, router: NextRouter) => {
  const query: LocationFilterType | CharacterFilterType = { ...router.query, name };
  delete query.page;
  if (name === '') delete query.name;
  return query;
};

export const getQueryWithGender = (gender: string, router: NextRouter) => {
  const query: LocationFilterType | CharacterFilterType = { ...router.query, gender };
  delete query.page;
  if (gender === '') delete query.gender;
  return query;
};

export function debouncing(ms: number, func: (...args: any) => void) {
  let timeOut: NodeJS.Timeout | null;
  return function handler(...args: any) {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
      timeOut = null;
    }, ms);
  };
}
