import { TableProps } from '@nextui-org/react';

export interface ColumnHeaderType {
  name: string;
  uid: string;
  action?: string;
}

export interface CustomTableProps<T> {
  props?: TableProps;
  columns: ColumnHeaderType[];
  searchBox?: boolean;
  tableData: Array<T>;
}
