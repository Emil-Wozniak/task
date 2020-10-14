import React from 'react';

export type GridElement = {
  style?: React.CSSProperties;
  children: JSX.Element | JSX.Element[] | string | number;
  fontSize?: FontSize;
  className?: string;
};

export enum FontSize {
  DEFAULT = 'inherit',
  LARGE = 'text-large',
  MEDIUM = 'text-medium',
  SMALL = 'text-small',
  VERY_SMALL = 'text-very-small',
}
