import React from 'react';
import { Education } from '#/components/education';
import { Experience } from '#/components/experience';
import { Header } from '#/components/header';
import { Membership } from '#/components/membership';
import { Profile } from '#/components/profile';
import { References } from '#/components/references';
import { Root } from '#/components/root';
import { Skills } from '#/components/skills';
import { HomeProps } from './types';

export const Home = ({
  header,
  profile,
  experience,
  education,
  skills,
  membership,
  references,
}: HomeProps) => {
  return (
    <Root>
      <main>
        <Header {...header} />
        <Profile {...profile} />
        <Experience {...experience} />
        <Education {...education} />
        <Skills {...skills} />
        <Membership {...membership} />
        <References {...references} />
      </main>
    </Root>
  );
};
