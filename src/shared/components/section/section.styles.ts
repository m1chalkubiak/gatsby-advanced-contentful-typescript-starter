import styled, { StyledProps, css } from 'styled-components';

import { styleSwitcher, themeColor } from '../../../theme/getters';
import { Color } from '../../../theme/theme.constants';
import { Breakpoint, media } from '../../../theme/media';
import { Paragraph } from '../../../theme/typography';
import { SectionComponentProps, TEXT_ALIGN } from './section.types';

export const Content = styled.div`
  background-color: ${themeColor(Color.PRIMARY)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${themeColor(Color.BLACK)};
  z-index: 2;
  width: 100%;
  height: 100%;

  ${Paragraph} {
    color: inherit;
  }

  ${media(Breakpoint.TABLET)`
    margin-bottom: 0;
    width: 50%;
    min-height: 50vh;
  `}
`;

export const Background = styled.div`
  background-color: ${themeColor(Color.SECONDARY)};
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  ${media(Breakpoint.TABLET)`
    height: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `}
`;

export const SectionParagraph = styled.div`
  margin: 36px 0;
  width: 80%;
  text-align: left;
`;

const textPositionRight = css`
  ${media(Breakpoint.TABLET)`
    flex-direction: row-reverse;
  `};
`;

const textPositionCenter = css`
  ${Content} {
    position: absolute;
    flex: none;
    width: 100%;
  }

  ${Background} {
    width: 100%;

    &:empty {
      background-color: ${themeColor(Color.SECONDARY)};
    }
  }

  ${SectionParagraph} {
    width: 100%;
    padding: 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${SectionParagraph} > * {
    width: 100%;
    text-align: center;
  }

  ${SectionParagraph} > *:not(a, h2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  ${media(Breakpoint.TABLET)`
    ${Content} {
      flex: 1;
    }
  `}
`;

export const Container = styled.section<StyledProps<SectionComponentProps>>`
  background-color: ${themeColor(Color.WHITE)};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  ${media(Breakpoint.TABLET)`
    flex-direction: row;
  `};

  ${styleSwitcher('textAlign', {
    [TEXT_ALIGN.RIGHT]: textPositionRight,
    [TEXT_ALIGN.CENTER]: textPositionCenter,
  })};
`;
