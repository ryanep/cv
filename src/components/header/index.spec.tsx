import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';
import { HeaderProps } from './types';

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
    const { queryByTestId } = render(<Header {...props} />);
    const header = queryByTestId('header');
    expect(header).not.toBeNull();
  });
});
