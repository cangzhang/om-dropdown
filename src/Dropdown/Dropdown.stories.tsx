import React, { useState } from 'react';
import OMDropdown from './Dropdown';
import { IMenuItem } from './Dropdown.types';

export default {
  title: 'OMDropdown',
};

const menu = [
  {
    label: 'aaa',
    value: 'aaa',
    key: 'aaa',
    menuTitle: '新增成员',
    filterKey: 'value',
    placeholder: '搜索成员…',
    children: [
      {
        label: 'aaa-1',
        value: 'aaa-1',
        key: 'aaa-1',
      },
      {
        label: 'bbb-1',
        value: 'bbb-1',
        key: 'bbb-1',
      },
    ],
  },
  {
    label: 'bbb',
    value: 'bbb',
    key: 'bbb',
    menuTitle: '新增组',
    filterKey: 'value',
    placeholder: '搜索组…',
    children: [
      {
        label: 'aaa-2',
        value: 'aaa-2',
        key: 'aaa-2',
      },
      {
        label: 'bbb-2',
        value: 'bbb-2',
        key: 'bbb-2',
      },
    ],
  },
];

const initValue: IMenuItem[] = [
  {
    label: 'aaa-1',
    value: 'aaa-1',
    key: 'aaa-1',
  },
];

export const Controlled = () => {
  const [value, setValue] = useState<IMenuItem[]>(initValue);

  const onValueChange = items => {
    setValue(items);
  }

  return <OMDropdown menu={menu} checkIcon={'√'} value={value} onValueChange={onValueChange}/>;
};

export const Uncontrolled = () => {
  return <OMDropdown menu={menu} checkIcon={'√'} />;
};
