import React, { useEffect, useState } from 'react';
import { IEntryItem, IMenuItem, IMenuProps } from './Dropdown.types';
import { SecondaryMenu } from './SecondaryMenu';

const filterItems = (arr: IMenuItem[] = [], selected: IMenuItem[] = []) => {
  return selected.filter(s => {
    return arr.find(i => i.value === s.value);
  });
};

export function Menu({
                       show,
                       menu,
                       expandIcon,
                       backIcon,
                       searchIcon,
                       checkIcon,
                       onToggleSelect,
                       selectedItems,
                       getItemIcon,
                       onClear,
                       hideStatusRow,
                     }: IMenuProps) {
  const [curEntry, setEntry] = useState<string | number | undefined>();

  const onClickEntry = (i: IEntryItem) => () => {
    setEntry(i.key);
  };

  const renderEntryList = () => {
    return menu.map(i => {
      const hasChildren = i.children?.length > 0;

      return (
        <div
          key={i.key}
          className={'om-dropdown_entry'}
          title={i.label}
          onClick={onClickEntry(i)}
        >
          <div className={'om-dropdown_entry_label'}>
            {i.prefixIcon && <div className={'om-dropdown_entry_label_prefix-icon'}>
              {i.prefixIcon}
            </div>}
            <div className={'om-dropdown_entry_label_text'}>
              {i.label}
            </div>
          </div>
          {hasChildren && (expandIcon && <div className={'om-dropdown_entry_expand-icon'}>{expandIcon}</div>)}
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
  const entryItem = curEntry && menu.find(i => i.key === curEntry);
  const itemsOfEntry = filterItems(entryItem?.children, selectedItems) ?? [];

  return showSecondaryMenu
    ? <SecondaryMenu
      children={entryItem?.children}
      backIcon={backIcon}
      filterKey={entryItem.filterKey}
      menuTitle={entryItem.menuTitle}
      searchIcon={searchIcon}
      checkIcon={checkIcon}
      backToTopLevel={() => setEntry(undefined)}
      placeholder={entryItem.placeholder}
      onToggleSelect={onToggleSelect}
      selectedItems={itemsOfEntry}
      getItemIcon={getItemIcon}
      onClear={onClear}
      hideStatusRow={hideStatusRow}
    />
    : <div className={'om-dropdown_menu'}>{renderEntryList()}</div>;
}
