export function getEpisodesIds(episodes: string[] | undefined) {
  return episodes?.map(urlEpisode => +urlEpisode?.split('/episode/')[1]);
}

export function getLocationId(urlLocation: string | undefined) {
  return urlLocation?.split('/location/')[1];
}

export function getCharactersIds(characters: string[] | undefined) {
  return characters?.map(urlCharacter => +urlCharacter?.split('/character/')[1]);
}

export function objectToQueryString(obj: any) {
  const queryString = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
      queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return queryString.join('&');
}
