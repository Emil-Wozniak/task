import React from 'react';
import { GridElement } from './grid-element';

type Col = GridElement;

const Col = ({ children, className }: Col) => (
  <div className={'col ' + className}>{children}</div>
);

export default Col;
