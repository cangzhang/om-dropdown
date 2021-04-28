import './Dropdown.scss';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Menu from './Menu';
import { IDropdownProps } from './Dropdown.types';

export default function OMDropdown({menu}: IDropdownProps) {
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const [showMenu, toggleMenu] = useState(false);

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
        this is om-dropdown
      </div>
      <Menu show={showMenu} menu={menu} />
    </div>
  );
}
