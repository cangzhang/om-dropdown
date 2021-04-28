import { ReactElement } from 'react';

export interface IMenuItem {
  label: string;
  value: string;
  key: string | number;
}

export interface IEntryItem extends IMenuItem {
  children?: IMenuItem[];
  menuTitle?: string;
  filterKey?: string,
  placeholder?: string;
  getItemIcon?: (i: IMenuItem) => ReactElement;
}

export interface IDropdownProps {
  menu: IEntryItem[];
}

export interface IMenuProps {
  show: boolean;
  menu: IEntryItem[];
  expandIcon?: ReactElement | string;
  prefixIcon?: ReactElement | string;
  backIcon?: ReactElement | string;
  searchIcon?: ReactElement | string;
  checkIcon?: ReactElement | string;
}

export interface ISecondaryMenuProps extends Pick<IEntryItem, 'children' | 'menuTitle' | 'filterKey' | 'placeholder' | 'getItemIcon'>,
  Pick<IMenuProps, 'backIcon' | 'checkIcon' | 'searchIcon'> {
  backToTopLevel: () => any;
}

