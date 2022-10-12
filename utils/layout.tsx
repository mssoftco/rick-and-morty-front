import React, { ComponentType, FC } from 'react';

const ReturnChildComponent: FC = ({ children }: any) => <>{children}</>;

export function getLayout<LP extends Record<string, never>>(Component: ComponentType<any>): ComponentType<LP> {
  return (Component as any).Layout || ReturnChildComponent;
}
