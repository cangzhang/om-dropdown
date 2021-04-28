import React from 'react';
import { IMenuProps } from './Dropdown.types';

export default function Menu({ show, menu }: IMenuProps) {
  if (!show) {
    return null;
  }

  return <div className={'om-dropdown-menu'}>
    {
      menu.map(i => {
        return <div key={i.value}>
          <span>
          {i.label}
          </span>
        </div>;
      })
    }
  </div>;
}
