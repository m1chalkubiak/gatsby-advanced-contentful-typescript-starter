import styled from 'styled-components';

import { Color, Font } from './theme.constants';
import { themeColor, themeFont } from './getters';
import LogoSVG from '../images/icons/logo.svg';

export const Logo = styled(LogoSVG)`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const H1 = styled.h1`
  font-family: ${themeFont(Font.PRIMARY)};
  font-weight: bold;
  color: ${themeColor(Color.BLACK)};
`;

export const H2 = styled.h2`
  font-family: ${themeFont(Font.PRIMARY)};
  font-weight: bold;
  color: ${themeColor(Color.BLACK)};
`;

export const Link = styled.a`
  text-decoration: underline;
`;
