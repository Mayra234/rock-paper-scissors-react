import React from 'react';
import { Label } from './index';

export default { title: 'Components/Label' };
export const Overview = (args) => {
  return <Label {...args} />;
};

Overview.args = {
  children: 'Alejandra',
};
