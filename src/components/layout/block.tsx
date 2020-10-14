import React from 'react';
import { GridElement } from './grid-element';

const Block = ({ className, children }: GridElement) => (
  <div className={'block ' + className}>{children}</div>
);

export default Block;
