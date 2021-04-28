import React from 'react';
import OMDropdown from './Dropdown';

export default {
  title: 'OMDropdown',
};

const menu = [
  {
    label: 'aaa',
    value: 'aaa',
    key: 'aaa',
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
    ]
  },
  {
    label: 'bbb',
    value: 'bbb',
    key: 'bbb',
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
    ]
  },
];

export const Primary = () => <OMDropdown menu={menu}/>;
