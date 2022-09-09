import React from 'react';
import { SelectOption } from '.';

export default { title: 'Components/SelectOption' };
export const Overview = () => {
  return (
    <select>
      <SelectOption value="mayra" text="Mayra" />
      <SelectOption value="mario" text="Mario" />
      <SelectOption value="maria" text="Maria" />
    </select>
  );
};
