import React from 'react';
import OMDropdown from './Dropdown';

export default {
  title: 'OMDropdown',
};

const menu = [
  {
    label: 'aaa',
    value: 'aaa',
  },
  {
    label: 'bbb',
    value: 'bbb',
  },
];

export const Primary = () => <OMDropdown menu={menu}/>;
