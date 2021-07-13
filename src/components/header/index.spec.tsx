import { render, screen } from '@testing-library/react';
import React from 'react';
import { HeaderProps } from './types';
import Header from '.';

describe('<Header />', () => {
  const props: HeaderProps = {
    title: {
      name: '__TITLE_NAME__',
      role: '__TITLE_ROLE__',
    },
    links: [
      {
        id: '1',
        title: '__LINK_TITLE__',
        url: '__LINK_URL__',
      },
    ],
  };

  it('should render header element', () => {
    render(<Header {...props} />);
    const header = screen.getByRole('header');
    expect(header).toBeInTheDocument();
  });
});
