import * as React from 'react';

interface Props {
  slot: string;
  children: React.ReactChild | React.ReactChild[];
}

export const Template = ({ children }: Props) => {
  return <React.Fragment>{children}</React.Fragment>;
};
