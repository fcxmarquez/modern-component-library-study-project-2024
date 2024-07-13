/* eslint-disable @typescript-eslint/no-explicit-any */
import { getClasses } from './styles';

export const getTemplate = (Component: any, styles: any) => {
  const Template = (args: any) => {
    const allProps = { ...Component.defaultProps, ...args };
    return <Component {...args} getStyles={getClasses(styles)(allProps)} />;
  };
  Template.displayName = `Template(${Component.displayName || Component.name || 'Component'})`;
  return Template;
};

export const getListTemplate =
  (Component: any, styles: any) =>
  ({ items, ...args }: { items: any[]; [key: string]: any }) => {
    return items.map((item: any, index: number) => {
      const allProps = { ...Component.defaultProps, ...args, ...item };
      return (
        <Component
          key={index}
          {...args}
          {...item}
          getStyles={getClasses(styles)(allProps)}
        />
      );
    });
  };

export const getOptionsArgTypes = (options: any) => ({
  description: '**options**',
  table: {
    type: { summary: options.map((option: any) => `'${option}'`).join('|') },
  },
  control: { type: 'select', options },
});
