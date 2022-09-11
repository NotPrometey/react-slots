import * as React from 'react';
import { Context, TemplateContext } from './TemplateContext';
import { useEffect, useState } from 'react';
import { Template } from '../components/Template';

export interface Props {
  children: any;
}

interface TemplateProps {}

export const withSlots =
  (Component: React.FC<TemplateProps>) =>
  ({ children }: Props) => {
    const [data, setData] = useState<Context[]>([]);

    useEffect(() => {
      const components = Array.isArray(children) ? children : [children];

      const templates = components.filter(
        (template) => template?.type?.name === Template.name,
      );

      const defaultTemplate = components.filter(
        (template) => template?.type?.name !== Template.name,
      );

      setData([
        {
          name: 'default',
          slot: defaultTemplate,
        },
        ...templates.map((template) => ({
          name: template.props.slot,
          slot: template.props.children,
        })),
      ]);

      return () => {
        setData([]);
      };
    }, [children]);

    return (
      <TemplateContext.Provider value={data}>
        {Component && <Component />}
      </TemplateContext.Provider>
    );
  };
