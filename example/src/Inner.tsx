import React from 'react';
import { Slot, withSlots } from 'slots';

const Inner = () => {
  return (
    <div>
      <Slot>default slot</Slot>
      <Slot name='test' />
    </div>
  );
};

export default withSlots(Inner);
