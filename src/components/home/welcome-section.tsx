import React from 'react';
import Container from '../layout/container';
import Block from '../layout/block';
import Me from '../../assets/me.png';

const WelcomeSection = () => (
  <Container style={{ marginTop: '4rem' }}>
    <Block className="row">
      <div className="col">
        <h2>
          <b>From Chemistry to Web development</b>
        </h2>
        <h3>Hello name if Emil, I'm a chemist and programmer.</h3>
      </div>
      <div className="col">
        <img
          src={Me}
          alt="my cartoon photo"
          style={{ padding: 12, height: '36vh' }}
        />
      </div>
    </Block>
  </Container>
);

export default WelcomeSection;
