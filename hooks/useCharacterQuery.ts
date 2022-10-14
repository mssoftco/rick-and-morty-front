import { useQuery } from '@tanstack/react-query';
import Character from '@/services/character';
import { CharacterFilterType, CharactersWithPaginationType } from '@/types/character';
import { objectToQueryString } from '@/utils/common';

export function useCharactersQuery({ page, name, gender }: CharacterFilterType) {
  const queryString = '?' + objectToQueryString({ page, name, gender });
  return useQuery<CharactersWithPaginationType>(['characters', queryString], () => Character.get(queryString), {
    enabled: !!page && page > 0
  });
}
