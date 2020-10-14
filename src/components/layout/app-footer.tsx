import React from 'react';
import Container from './container';
import Row from './row';
import Col from './col';
import { Tools } from '../../entities/languages/language';

const AppFooter = (): JSX.Element => {
  const git = Tools[2];
  return (
    <footer className="menu">
      <Container className="footer">
        <Row>
          <Col>
            <span>Want to check out my code click here</span>
            <a href="https://gitlab.com/Emil_Wozniak/woodpecker-task">
              <i className={`${git.src}`} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;
