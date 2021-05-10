import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { H1, H2, Paragraph, Strong } from '../../../theme/typography';
import { getDisplayComponent } from './utils';
import { ContentManagerProps, ComponentsProps, EmbeddedEntryProps } from './contentManager.types';
import { Container } from './contentManager.styles';

const renderContentComponent: React.FC<ComponentsProps> = (item) => {
  const DisplayComponent = getDisplayComponent(item);

  if (DisplayComponent) {
    return <DisplayComponent {...item} />;
  }

  return null;
};

export const ContentManagerComponent = ({ className, content, children }: ContentManagerProps) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <Strong>{text}</Strong>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (_: any, children: string) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (_: any, children: string) => <H2>{children}</H2>,
      [BLOCKS.PARAGRAPH]: (_: any, children: string) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.EMBEDDED_ENTRY]: ({ data: { target } }: EmbeddedEntryProps) => {
        return renderContentComponent(target);
      },
    },
  };

  if (!content && !children) {
    return null;
  }

  // @ts-ignore
  return <Container className={className}>{renderRichText(content || children, options)}</Container>;
};
