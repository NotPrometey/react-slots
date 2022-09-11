import * as React from 'react';
import { useContext } from 'react';
import { TemplateContext } from '../contexts/TemplateContext';

interface Props {
  name?: string;
  children?: React.ReactChild | React.ReactChild[];
}

export const Slot = ({ name = 'default', children }: Props) => {
  const slots = useContext(TemplateContext);

  if (slots === null) {
    console.warn('use `withSlots` for the component with `Slot`');
  }

  const content = slots?.find((item) => name === item.name);

  return content?.slot ? (
    <React.Fragment>{content.slot}</React.Fragment>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};
