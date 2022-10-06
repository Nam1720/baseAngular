export interface ConfigColumn {
  id: string;
  name: string;
  sort: string;
  fixed: boolean;
  isInput?: boolean;
  isSelect?: boolean;
  width?: number;
  colChildren?: Children[];
  rowChildren?: Children[];
}

export interface Children {
  id: string;
  name: string;
  sort: string;
}

export interface ValueSelect {
  id?: any;
  value: string;
  index: number;
}

