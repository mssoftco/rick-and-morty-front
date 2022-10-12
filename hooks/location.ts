import { useQuery } from '@tanstack/react-query';
import Location from '@/services/location';
import { LocationType, LocationsWithPaginationType } from '@/types/location';

export function useLocationsByPage(page?: number) {
  const pageNumber = page ? page : 1;
  const queryString: string = `?page=${pageNumber}`;
  return useQuery<LocationsWithPaginationType>(['locations', queryString], () => Location.get(queryString));
}

export function useLocationById(id: number) {
  return useQuery<LocationType>(['location', id], () => Location.getById(id), {
    enabled: !!id && id > 0
  });
}

export function useLocationsByIds(ids: number[]) {
  //always return array
  ids.push(0);
  return useQuery<LocationType[]>(['locations', ids], () => Location.getByIds(ids), {
    enabled: !!ids && Array.isArray(ids) && ids.length > 1,
    select: data => data.filter(({ id }) => id !== 0)
  });
}
