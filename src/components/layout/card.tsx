import React from 'react';
import '../../styles/grid.less';
import { FontSize, GridElement } from './grid-element';
import Divider from './divider';

interface Card extends GridElement {
  className?: string;
  small?: boolean;
  divider?: boolean;
  isImage?: boolean;
  title?: string;
  isLink?: boolean;
  href?: string;
  linkText?: string;
}

const Card = ({
  className = '',
  small = false,
  divider = false,
  children,
  title = '',
  linkText = '',
  href = '',
  isImage = false,
  isLink = false,
  fontSize = FontSize.DEFAULT,
}: Card): JSX.Element => {
  const size = small ? '-small' : '';
  return (
    <div className={'card shadow-md ' + className}>
      <div className={`card${size}`}>
        <div className={isImage ? 'card-image-wrapper' : 'card-wrapper'}>
          <h3 className={`card-img-title ${fontSize}`}>
            {title}
            {isImage && <div className={`card${size}-img`} />}
          </h3>
        </div>
        <div className="card-text-content">{children}</div>
        {divider && <Divider />}
        {isLink && (
          <div className={`card-text${size}-footer`}>
            <a href={href} className={`card-text${size}-link`}>
              {linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
