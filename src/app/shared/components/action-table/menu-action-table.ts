export interface MenuActionTable {
  id: number,
  name: string,
  icon?: string,
  active?: boolean
}

export interface eventActionTable {
  id?: number,
  action: MenuActionTable,
  data: any
}
