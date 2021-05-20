import React from 'react';

import { PageProps, Link } from 'gatsby';
import { Helmet } from 'react-helmet-async';

import { Article, H1, Paragraph } from '../theme/typography';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Article>
      <Helmet title="404 - Page Not Found" />
      <H1 center>Page Not Found</H1>
      <Paragraph center>
        Please return <Link to="/">home</Link> or use the menu to navigate to a different page.
      </Paragraph>
    </Article>
  );
};

export default NotFoundPage;
