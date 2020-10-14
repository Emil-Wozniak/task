import React from 'react';
import Col from '../layout/col';
import Interest from './interest';

const Interests = () => (
  <div className="row">
    <div className="col interests">
      <b>Sports</b>
      <ul className="list">
        <Interest icon="bicycle" text="cycling trip" />
        <Interest icon="skating" text="ice skating" />
      </ul>
    </div>
    <Col className="interests">
      <b>Science</b>
      <ul className="list">
        <Interest icon="book" text="science-popular books" />
        <Interest icon="laptop" text="industry programs" />
      </ul>
    </Col>
  </div>
);

export default Interests;
