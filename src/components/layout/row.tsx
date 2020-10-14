import React from 'react';
import { GridElement } from './grid-element';

type Row = GridElement;

const Row = ({ children }: Row) => <div className="row">{children}</div>;

export default Row;
