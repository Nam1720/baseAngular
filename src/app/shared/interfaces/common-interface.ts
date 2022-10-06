export interface IBreadcrumb {
  label: string;
  url: string;
}

export interface Step {
  id:number,
  content:string,
  tooltip?:string,
  value:number,
  line?:boolean
}

export interface FilterCommonDetail {
  id?: number,
  name?: string,
  value?: number | string
}