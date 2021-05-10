import { Document } from '@contentful/rich-text-types';

import { SectionComponentProps } from '../section/section.types';

export interface ContentManagerProps {
  className?: string;
  content?: Document;
  children?: Document;
}

export type ComponentsProps = SectionComponentProps;

export interface EmbeddedEntryProps {
  data: {
    target: ComponentsProps;
  };
}
