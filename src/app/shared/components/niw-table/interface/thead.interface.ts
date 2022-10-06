export interface FilterCol {
  id?: string;
  key?: string;
  name: string;
}

export interface TheadModel {
  // key: string;
  name: string;
  filterMenu: FilterCol[];
  sort: boolean;
  search: boolean;
  rowspan?: number;
  colspan?: number;
  // isFixed?: boolean;
  // isLazyload?: boolean;
}