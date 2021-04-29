import React, { useState } from 'react';
import { ISecondaryMenuProps } from './Dropdown.types';

export function SecondaryMenu({
                            menuTitle = ``,
                            children = [],
                            filterKey = `value`,
                            backIcon,
                            searchIcon,
                            getItemIcon,
                            backToTopLevel,
                            checkIcon,
                            placeholder = ``,
                            selectedItems,
                            onToggleSelect,
                            onClear,
                                hideStatusRow,
                          }: ISecondaryMenuProps) {
  const [filter, setFilter] = useState(``);

  const onFilterChange = (ev) => {
    setFilter(ev.target.value);
  };

  const hasSelected = selectedItems.length > 0;
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

    {
      !hideStatusRow &&
      <div className={'om-dropdown_secondary_status'}>
        <div className={'om-dropdown_secondary_status_picked'}>
          已选 {selectedItems.length ?? 0} 项
        </div>
        {
          hasSelected &&
          <div className={'om-dropdown_secondary_status_clear-filter'} onClick={() => onClear(selectedItems)}>
            清除已选
          </div>
        }
      </div>
    }

    <div className={'om-dropdown_secondary_list'}>
      {
        filterResult.map(i => {
            const checked = selectedItems.find(s => s.value === i.value);

            return <div
              className={'om-dropdown_secondary_list_item'}
              key={i.key}
              title={i.label}
              onClick={() => onToggleSelect(i)}
            >
              {shouldShowIcon && <div className={'om-dropdown_secondary_list_item_icon'}>
                {getItemIcon(i)}
              </div>}
              <div className={'om-dropdown_secondary_list_item_label'}>
                {i.label}
              </div>
              {checked && checkIcon && <div className={'om-dropdown_secondary_list_item_check-icon'}>
                {checkIcon}
              </div>}
            </div>;
          },
        )
      }
    </div>
  </div>;
}
