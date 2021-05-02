import Styled from 'styled-components'
import {color} from "helpers";

export const StyledBoardsList = Styled.div`
  > * {
    &:not(:last-child){
      margin-bottom: 1rem;
    }
  }
`;

export const StyledTitle = Styled.h3`
  margin-top: 0;
  font-size: 1.4rem;
  font-weight: normal;
  color: ${color('neutral', 'light')};
`