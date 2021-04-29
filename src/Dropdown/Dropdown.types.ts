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
  onValueChange?: (selected: IMenuItem[]) => any;
  value?: IMenuItem[];
  checkIcon?: ReactElement | string;
}

export interface IMenuProps extends Pick<IDropdownProps, 'checkIcon'>{
  show: boolean;
  menu: IEntryItem[];
  expandIcon?: ReactElement | string;
  prefixIcon?: ReactElement | string;
  backIcon?: ReactElement | string;
  searchIcon?: ReactElement | string;
  onToggleSelect: (i: IMenuItem) => any;
  selectedItems: IMenuItem[];
}

export interface ISecondaryMenuProps extends Pick<IEntryItem, 'children' | 'menuTitle' | 'filterKey' | 'placeholder' | 'getItemIcon'>,
  Pick<IMenuProps, 'backIcon' | 'searchIcon' | 'onToggleSelect' | 'selectedItems'>,
  Pick<IDropdownProps, 'checkIcon'>{
  backToTopLevel: () => any;
}

