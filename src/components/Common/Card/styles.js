import Styled from 'styled-components'
import {makeRgba} from "helpers";

export const StyledCard = Styled.div`
  margin-bottom: 1rem;
  background-color: ${makeRgba(0.04, 'neutral', 'dark')};
  cursor: pointer;
`;

export const StyledTitle = Styled.div`
  border-bottom: solid 0.1rem ${makeRgba(0.1, 'neutral', 'dark')};
  padding: 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const StyledDescription = Styled.div`
  padding: 0.8rem;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;