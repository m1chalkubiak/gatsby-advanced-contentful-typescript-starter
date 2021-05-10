import { Document } from '@contentful/rich-text-types';

export enum TEXT_ALIGN {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export interface SectionComponentProps {
  content?: Document;
  textAlign?: TEXT_ALIGN;
}
