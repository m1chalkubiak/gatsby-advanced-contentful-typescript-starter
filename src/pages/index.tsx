import React from 'react';

import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet-async';

import { Article, H1, Logo } from '../theme/typography';
import { Users } from '../shared/components/users';

interface IndexProps {
  site: {
    buildTime: string;
  };
}

const Index: React.FC<PageProps<IndexProps>> = () => {
  return (
    <Article>
      <Helmet title="Homepage" />
      <H1>Hello World!</H1>
      <Logo />
      <Users />
    </Article>
  );
};

export default Index;
