import { useQuery } from '@tanstack/react-query';
import Episode from '@/services/episode';
import { EpisodeType } from '@/types/episode';

export function useEpisodesByIds(ids: number[]) {
  //always return array
  ids.push(0);
  return useQuery<EpisodeType[]>(['episodes', ids], () => Episode.getByIds(ids), {
    enabled: !!ids && Array.isArray(ids) && ids.length > 1,
    select: data => data.filter(({ id }) => id !== 0)
  });
}
