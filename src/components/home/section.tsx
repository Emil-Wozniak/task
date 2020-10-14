import React from 'react';
import Container from '../layout/container';
import { FontSize } from '../layout/grid-element';
import Card from '../layout/card';

type Section = {
  id: string;
  title: string;
  fontSize?: FontSize;
  children: JSX.Element | JSX.Element[];
};
const Section = ({
  id,
  children,
  title,
  fontSize = FontSize.SMALL,
}: Section) => (
  <section id={id}>
    <Container>
      <Card fontSize={fontSize} small title={title}>
        {children}
      </Card>
    </Container>
  </section>
);

export default Section;
