import React, { useEffect, useState } from 'react';
import { IEntryItem, IMenuProps, ISecondaryMenuProps } from './Dropdown.types';

function Secondary({
                     menuTitle = ``,
                     children = [],
                     filterKey = `value`,
                     backIcon = `<`,
                     searchIcon,
                     getItemIcon,
                     backToTopLevel,
                     checkIcon,
                     placeholder = ``,
                   }: ISecondaryMenuProps) {
  const [filter, setFilter] = useState(``);
  const [selected, setSelected] = useState<string[]>([]);

  const onFilterChange = (ev) => {
    setFilter(ev.target.value);
  };

  const hasSelected = selected.length > 0;
  const shouldShowIcon = !!getItemIcon;

  const f = filter.trim().toLowerCase();
  const filterResult = f.length > 0
    ? children.filter(i => (i[filterKey] || ``).toLowerCase().includes(f))
    : children;

  return <div className={'om-dropdown_secondary'}>
    <div className={'om-dropdown_secondary_title'}>
      {
        backIcon &&
        <div className={'om-dropdown_secondary_title_back-icon'} onClick={backToTopLevel}>
          {backIcon}
        </div>
      }
      <div className={'om-dropdown_secondary_title_text'}>
        {menuTitle}
      </div>
    </div>

    <div className={'om-dropdown_secondary_search'}>
      {searchIcon &&
      <div className={'om-dropdown_secondary_search_icon'}>
        {searchIcon}
      </div>
      }
      <input type="text" value={filter} onChange={onFilterChange} placeholder={placeholder}/>
    </div>

    <div className={'om-dropdown_secondary_status'}>
      <div className={'om-dropdown_secondary_status_picked'}>
        已选 {selected.length ?? 0} 项
      </div>
      {
        hasSelected &&
        <div className={'om-dropdown_secondary_status_clear-filter'}>
          清除已选
        </div>
      }
    </div>

    <div className={'om-dropdown_secondary_list'}>
      {
        filterResult.map(i =>
          <div className={'om-dropdown_secondary_list_item'} key={i.key}>
            {shouldShowIcon && <div className={'dropdown_secondary_list_item_icon'}>
              {getItemIcon(i)}
            </div>}
            <div className={'om-dropdown_secondary_list_item_label'}>
              {i.label}
            </div>
            {checkIcon && <div className={'om-dropdown_secondary_list_item_check-icon'}>
              {checkIcon}
            </div>}
          </div>,
        )
      }
    </div>
  </div>;
}

export default function Menu({
                               show,
                               menu,
                               expandIcon,
                               prefixIcon,
                               backIcon,
                               searchIcon,
                               checkIcon,
                             }: IMenuProps) {
  const [curEntry, setEntry] = useState<string | number | undefined>();

  const onClickEntry = (i: IEntryItem) => () => {
    setEntry(i.key);
  };

  const renderEntryList = () => {
    return menu.map(i => {
      const hasChildren = i.children?.length > 0;
      return (
        <div key={i.key} className={'om-dropdown_entry'} onClick={onClickEntry(i)}>
          <div className={'om-dropdown_entry_label'}>
            {prefixIcon ?? <div className={'om-dropdown_entry_label_prefix-icon'}>
              {prefixIcon}
            </div>}
            <div className={'om-dropdown_entry_label_text'}>
              {i.label}
            </div>
          </div>
          <div className={'om-dropdown_entry_expand-icon'}>
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
  const entryItem = curEntry && menu.find(i => i.key === curEntry);

  return showSecondaryMenu
    ? <Secondary
      children={entryItem?.children}
      backIcon={backIcon}
      filterKey={entryItem.filterKey}
      menuTitle={entryItem.menuTitle}
      searchIcon={searchIcon}
      checkIcon={checkIcon}
      backToTopLevel={() => setEntry(undefined)}
      placeholder={entryItem.placeholder}
    />
    : <div className={'om-dropdown_menu'}>{renderEntryList()}</div>;
}
