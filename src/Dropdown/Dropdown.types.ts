import { ReactElement, ReactNode } from 'react';

type IIcon = ReactElement | string | number;

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
  prefixIcon?: IIcon;
}

export interface IDropdownProps {
  menu: IEntryItem[];
  children: ReactNode;
  onValueChange?: (selected: IMenuItem[], changed: IMenuItem[], nextStatus: boolean) => any;
  value?: IMenuItem[];
  checkIcon?: IIcon;
  getItemIcon?: (i: IMenuItem) => IIcon;
  expandIcon?: IIcon;
  backIcon?: IIcon;
  searchIcon?: IIcon;
  hideStatusRow?: boolean;
}

export interface IMenuProps extends Pick<IDropdownProps, 'checkIcon' | 'getItemIcon' | 'expandIcon' | 'backIcon' | 'searchIcon' | 'hideStatusRow'> {
  show: boolean;
  menu: IEntryItem[];
  onToggleSelect: (i: IMenuItem) => any;
  selectedItems: IMenuItem[];
  onClear: (s: IMenuItem[]) => any;
}

export interface ISecondaryMenuProps extends Pick<IEntryItem, 'children' | 'menuTitle' | 'filterKey' | 'placeholder' | 'prefixIcon'>,
  Pick<IMenuProps, 'backIcon' | 'searchIcon' | 'onToggleSelect' | 'selectedItems' | 'onClear'>,
  Pick<IDropdownProps, 'checkIcon' | 'getItemIcon' | 'hideStatusRow'> {
  backToTopLevel: () => any;
}

