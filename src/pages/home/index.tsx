import React from 'react';
import Root from '../../components/root';
import Header from '../../components/header';
import Profile from '../../components/profile';
import Experience from '../../components/experience';
import Education from '../../components/education';
import Skills from '../../components/skills';
import Membership from '../../components/membership';
import References from '../../components/references';
import { HomeProps } from './types';

export const Home: React.FC<HomeProps> = ({
  header,
  profile,
  experience,
  education,
  skills,
  membership,
  references,
}) => {
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

export default Home;
