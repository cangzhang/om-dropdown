import React, { useEffect, useState } from 'react';
import { IEntryItem, IMenuProps } from './Dropdown.types';

export default function Menu({ show, menu, expandIcon, prefixIcon }: IMenuProps) {
  const [curEntry, setEntry] = useState<string | number | undefined>();

  const onClickEntry = (i: IEntryItem) => () => {
    setEntry(i.key);
  };

  const renderEntryList = () => {
    return menu.map(i => {
      const hasChildren = i.children?.length > 0;
      return (
        <div key={i.key} className={'om-dropdown-entry'} onClick={onClickEntry(i)}>
          <div className={'om-dropdown-entry-label'}>
            {prefixIcon ?? `+`}
            <div className={'om-dropdown-entry-label-text'}>
              {i.label}
            </div>
          </div>
          <div className={'om-dropdown-entry-expand-icon'}>
            {hasChildren && (expandIcon ?? `>`)}
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    if (!show) {
      setEntry(undefined);
    }
  }, [show, setEntry]);

  if (!show) {
    return null;
  }

  const showSecondaryMenu = curEntry !== undefined;

  return <div className={'om-dropdown-menu'}>
    {
      showSecondaryMenu
        ? <div>2nd menu</div>
        : renderEntryList()
    }
  </div>;
}
