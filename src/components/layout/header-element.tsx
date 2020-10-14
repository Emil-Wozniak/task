import React from 'react';

type HeaderElement = {
  title: string;
};

const HeaderElement = ({ title }: HeaderElement) => (
  <li className="item">
    <button
      className="item"
      onClick={() =>
        (window.location.hash = `#${title.replace(' ', '-').toLowerCase()}`)
      }
    >
      {title.toUpperCase()}
    </button>
  </li>
);

export default HeaderElement;
