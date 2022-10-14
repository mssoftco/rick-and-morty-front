import { PaginationInfoType } from '@/types/common';

export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type LocationFilterType = {
  page?: number;
  name?: string;
};

export type LocationsWithPaginationType = {
  info: PaginationInfoType;
  results: LocationType[];
};
