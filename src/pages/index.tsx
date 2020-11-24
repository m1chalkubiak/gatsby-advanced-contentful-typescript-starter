import React from 'react';

import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet-async';

import { Article, H1, Logo } from '../theme/typography';

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
    </Article>
  );
};

export default Index;
