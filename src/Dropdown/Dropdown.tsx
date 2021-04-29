import './Dropdown.scss';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Menu from './Menu';
import { IDropdownProps, IMenuItem } from './Dropdown.types';

export default function OMDropdown({
                                     menu,
                                     checkIcon,
                                     onValueChange = () => null,
                                     getItemIcon,
                                     children,
                                     expandIcon,
                                     backIcon,
                                     searchIcon,
                                     ...rest
                                   }: IDropdownProps) {
  const { value } = rest;

  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);

  const [showMenu, toggleMenu] = useState(false);
  const [selected, setSelected] = useState<IMenuItem[]>(value ?? []);

  const handleClickOutside = useCallback((ev) => {
    if (!showMenu) {
      return;
    }

    if (wrapperRef.current && !wrapperRef.current.contains(ev.target)) {
      toggleMenu(false);
    }
  }, [toggleMenu, showMenu]);

  const onClickTrigger = () => {
    toggleMenu(!showMenu);
  };

  const updateSelect = (next) => {
    if (!('value' in rest)) {
      setSelected(next);
    }

    onValueChange(next);
  };

  const onToggleSelect = (item) => {
    const existed = selected.find(i => i.value === item.value);
    const next = existed
      ? selected.filter(i => i.value !== item.value)
      : selected.concat(item);

    updateSelect(next);
  };

  const onClear = (items) => {
    const next = selected.filter(i => {
      const shouldRemove = items.find(j => j.value === i.value);
      return !shouldRemove;
    });

    updateSelect(next);
  };

  useEffect(() => {
    onValueChange(selected);
  }, [selected]);

  useEffect(() => {
    if ('value' in rest) {
      setSelected(value ?? []);
    }
  }, [value]);

  useEffect(() => {
    document.addEventListener(`mousedown`, handleClickOutside);

    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={'om-dropdown om-dropdown_container'} ref={wrapperRef}>
      <div
        className={'om-dropdown_trigger'}
        ref={triggerRef}
        onClick={onClickTrigger}
      >
        {children}
      </div>
      <Menu
        show={showMenu}
        menu={menu}
        onToggleSelect={onToggleSelect}
        selectedItems={selected}
        checkIcon={checkIcon}
        getItemIcon={getItemIcon}
        onClear={onClear}
        expandIcon={expandIcon}
        backIcon={backIcon}
        searchIcon={searchIcon}
      />
    </div>
  );
}
