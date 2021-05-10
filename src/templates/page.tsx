import React from 'react';

import { PageProps, graphql } from 'gatsby';
import { Helmet } from 'react-helmet-async';
import { Document } from '@contentful/rich-text-types';

import { Article } from '../theme/typography';
import { ContentManager } from '../shared/components/contentManager';

interface PageTemplateProps {
  data: {
    contentfulPage: {
      metaTitle: string;
      content: Document;
    };
  };
}

const PageTemplate: React.FC<PageProps & PageTemplateProps> = ({ data }) => {
  const { metaTitle, content } = data.contentfulPage;

  return (
    <Article>
      <Helmet title={metaTitle} />
      <ContentManager>{content}</ContentManager>
    </Article>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      metaTitle
      content {
        raw
        references {
          sys {
            contentType {
              sys {
                id
              }
            }
          }
          ... on ContentfulSection {
            contentful_id
            __typename
            textAlign
            content {
              raw
            }
          }
        }
      }
    }
  }
`;
