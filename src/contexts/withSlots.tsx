import * as React from 'react';
import { Context, TemplateContext } from './TemplateContext';
import { useEffect, useMemo, useState } from 'react';
import { Template } from '../components/Template';

export interface Props {
  children: any;
}

interface TemplateProps {}

export const withSlots =
  (Component: React.FC<TemplateProps>) =>
  ({ children }: Props) => {
    const [data, setData] = useState<Context[]>([]);

    const components = Array.isArray(children) ? children : [children];

    const templates = useMemo(
      () =>
        components.filter(
          (template) =>
            template?.type?.name === Template.name &&
            template?.props?.slot !== 'default',
        ),
      [components],
    );

    const defaultTemplate = useMemo(
      () =>
        components.filter(
          (template) =>
            template?.type?.name !== Template.name ||
            (template?.type?.name === Template.name &&
              template?.props?.slot === 'default'),
        ),
      [components],
    );

    useEffect(() => {
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
    }, [templates, defaultTemplate]);

    useEffect(() => {
      if (data && data.length) {
        data.forEach(({ name }) => {
          if (
            name !== 'default' &&
            !templates.find((template) => template?.props?.slot === name)
          ) {
            console.warn(`slot with name '${name}' does not exist.`);
          }
        });
      }
    }, [data, templates]);

    return (
      <TemplateContext.Provider value={data}>
        {Component && <Component />}
      </TemplateContext.Provider>
    );
  };
