import React from 'react';
import { Bubbles } from '#/components/bubbles';
import { Wrap } from '#/components/wrap';
import * as styled from './styles';
import { HeaderProps } from './types';

export const Header = ({ title, links }: HeaderProps) => {
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
            {links.map((link) => (
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
