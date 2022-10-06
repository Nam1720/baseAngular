export interface FilterCol {
  id?: string;
  key?: string;
  name: string;
}

export interface TheadModelItem {
  name: string;
  filterMenu?: FilterCol[];
  sort?: boolean;
  search?: boolean;
  rowspan?: number;
  colspan?: number;
  key?: string;
  isFilter?: boolean;
}

export interface TheadModel extends TheadModelItem {
  children?: TheadModelItem[];
}

export interface SelectType {
  menus?: any[];
  linkApi?: string;
  isShowCheckBox?: boolean;
}

export interface TbodyModel {
  select?: SelectType;
  rowspan?: number;
  colspan?: number;
  type?: 'number' | 'input' | 'select' | 'date' | 'currency' | 'percent' | 'status';
  format?: any;
  condition?: any;
  isFilterChild?: boolean;
  typeSelectOption?: any;
}

export interface ConfigTable {
  loading?: boolean;
  fixedHead?: boolean;
  isShowCheckbox?: boolean;
  hasChild?: boolean;
  childSameParent?: boolean;
}

export interface ConfigTableCol {
  key?: string;
  isFixed?: boolean;
  isLazyload?: boolean;
  thead: TheadModel;
  tbody?: TbodyModel;
  children?: ConfigTableCol[];
}

export interface KeyTableRender {
  key?: string;
}

export interface MenuAction {
  id: number;
  name: string;
}
