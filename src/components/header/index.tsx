import React from 'react';
import Wrap from '../wrap';
import Bubbles from '../bubbles';
import { HeaderProps } from './types';
import * as styled from './styles';

export const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <styled.Header data-testid="header">
      <Bubbles />
      <Wrap>
        <styled.Content>
          <styled.Heading>
            <styled.Name>{title.name}</styled.Name>
            <styled.Title>{title.role}</styled.Title>
          </styled.Heading>
          <div>
            {links.map(link => (
              <styled.Link
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </styled.Link>
            ))}
          </div>
        </styled.Content>
      </Wrap>
    </styled.Header>
  );
};

export default Header;
