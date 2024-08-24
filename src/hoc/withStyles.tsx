import { getClasses } from '@/helpers/styles';

export const withStyles =
  (styles: CSSModuleClasses) =>
  (WrappedComponent: React.ComponentType<any>) => {
    const WithStylesComponent = (props: React.PropsWithChildren<any>) => {
      const allProps = { ...WrappedComponent.defaultProps, ...props };

      return (
        <WrappedComponent {...props} getStyles={getClasses(styles)(allProps)} />
      );
    };

    WithStylesComponent.displayName = WrappedComponent.displayName;

    return WithStylesComponent;
  };
