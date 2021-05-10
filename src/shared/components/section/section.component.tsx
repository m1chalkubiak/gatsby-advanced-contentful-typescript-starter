import React from 'react';

import { Container, Content, SectionParagraph, Background } from './section.styles';
import { SectionComponentProps } from './section.types';
import { ContentManager } from '../contentManager';

export const SectionComponent = ({ content, textAlign }: SectionComponentProps) => {
  return (
    <Container textAlign={textAlign}>
      <Content>
        <SectionParagraph>
          <ContentManager>{content}</ContentManager>
        </SectionParagraph>
      </Content>
      <Background />
    </Container>
  );
};
