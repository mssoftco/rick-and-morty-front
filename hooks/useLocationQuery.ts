import { useQuery } from '@tanstack/react-query';
import Location from '@/services/location';
import { LocationsWithPaginationType, LocationFilterType } from '@/types/location';
import { objectToQueryString } from '@/utils/common';

export function useLocationsQuery({ page, name }: LocationFilterType) {
  const queryString = '?' + objectToQueryString({ page, name });
  return useQuery<LocationsWithPaginationType>(['locations', queryString], () => Location.get(queryString), {
    enabled: !!page && page > 0
  });
}
