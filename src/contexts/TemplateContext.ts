import * as React from 'react';

export interface Context {
  name: string;
  slot: React.ReactChild | React.ReactChild[] | null;
}

export const TemplateContext = React.createContext<Context[] | null>(null);
