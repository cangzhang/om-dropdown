import { ReactElement } from 'react';

export interface IMenuItem {
  label: string;
  value: string;
  key: string | number;
}

export interface IEntryItem extends IMenuItem {
  children?: IMenuItem[];
}

export interface IDropdownProps {
  menu: IEntryItem[];
}

export interface IMenuProps {
  show: boolean;
  menu: IEntryItem[];
  expandIcon?: ReactElement;
  prefixIcon?: ReactElement;
}

