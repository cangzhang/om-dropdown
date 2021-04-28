export interface IMenuItem {
  label: string;
  value: string;
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
}
