import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Interest = {
  icon: IconProp;
  text: string;
};
const Interest = ({ icon, text }: Interest) => (
  <li className="row">
    <div className="column">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="column">
      <span>&nbsp;{text}</span>
    </div>
  </li>
);

export default Interest;
