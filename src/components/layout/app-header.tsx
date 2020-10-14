import React from 'react';
import HeaderElement from './header-element';

const AppHeader = (): JSX.Element => (
  <header>
    <nav className="navigation-bar is-visible" data-nav-status="toggle">
      <ul>
        <li>
          <h1>Woodpecker Task</h1>
        </li>
        <HeaderElement title="intro" />
        <HeaderElement title="tech stack" />
        <HeaderElement title="interests" />
      </ul>
    </nav>
  </header>
);

export default AppHeader;
