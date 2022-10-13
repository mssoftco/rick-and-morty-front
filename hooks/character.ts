import { useQuery } from '@tanstack/react-query';
import Character from '@/services/character';
import { CharacterFilterType, CharactersWithPaginationType, CharacterType } from '@/types/character';
import { objectToQueryString } from '@/utils/common';

export function useCharactersQuery({ page, name, gender }: CharacterFilterType) {
  const queryString = '?' + objectToQueryString({ page, name, gender });
  return useQuery<CharactersWithPaginationType>(['characters', queryString], () => Character.get(queryString), {
    enabled: !!page && page > 0
  });
}

export function useCharacterById(id: number) {
  return useQuery<CharacterType>(['character', id], () => Character.getById(id), {
    enabled: !!id && id > 0
  });
}

export function useCharactersByIds(ids: number[]) {
  //always return array
  ids.push(0);
  return useQuery<CharacterType[]>(['characters', ids], () => Character.getByIds(ids), {
    enabled: !!ids && Array.isArray(ids) && ids.length > 1,
    select: data => data.filter(({ id }) => id !== 0)
  });
}
