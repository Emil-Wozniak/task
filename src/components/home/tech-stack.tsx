import React from 'react';
import Row from '../layout/row';
import Col from '../layout/col';
import Carousel from '../layout/carousel';
import { Databases, Languages, Tools } from '../../entities/languages/language';

const TechStack = () => (
  <Row>
    <Col>
      <Carousel items={Languages} title="Languages:" />
    </Col>
    <Col>
      <Carousel items={Databases} title="Databases:" />
    </Col>
    <Col>
      <Carousel items={Tools} title="Tools:" />
    </Col>
  </Row>
);

export default TechStack;
