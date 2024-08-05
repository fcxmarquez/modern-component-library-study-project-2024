import classNames from 'classnames';

type CSSModuleClasses = {
  [key: string]: string;
};

const getModulesClasses = (cssModule: CSSModuleClasses, classKey: string) => {
  return (cssModule && cssModule[classKey]) || classKey;
};

const getObjectClasses = (cssModule: CSSModuleClasses, object: any) => {
  return Object.keys(object).reduce((classes, classKey) => {
    const className = cssModule[classKey];
    return className ? { ...classes, [className]: object[classKey] } : classes;
  }, {});
};

type Props = {
  [key: string]: unknown;
};

const getDynamicClasses = (
  cssModule: CSSModuleClasses,
  props: Props,
  classes: string[]
) => {
  return classes.reduce((classesObject, classKey) => {
    const propValue = props[classKey];
    const className = cssModule[`${classKey}-${propValue}`];

    return className && propValue
      ? { ...classesObject, [className]: propValue }
      : classesObject;
  }, {});
};

export const getClasses =
  (cssModule: CSSModuleClasses) =>
  (props: Props) =>
  (...args: (string | object)[]) => {
    return classNames(
      args.map((arg) => {
        if (Array.isArray(arg)) {
          return getDynamicClasses(cssModule, props, arg);
        } else if (typeof arg === 'string') {
          return getModulesClasses(cssModule, arg);
        } else if (typeof arg === 'object') {
          return getObjectClasses(cssModule, arg);
        }
      })
    );
  };
