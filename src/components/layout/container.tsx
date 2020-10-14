import React from 'react';
import { GridElement } from './grid-element';

const Container = ({
  children,
  className,
  style,
}: GridElement): JSX.Element => (
  <div className={'container ' + className} style={style}>
    {children}
  </div>
);

export default Container;
