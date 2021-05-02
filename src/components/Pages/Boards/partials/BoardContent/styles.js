import Styled from 'styled-components'
import {color} from "helpers";
import {Button} from "components/Globals";

export const StyledBoardContent = Styled.div``;

export const StyledBoardTitle = Styled.div`
  background: ${color('gray', 'light')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-radius: 0.5rem;
`;

export const StyledTitle = Styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: normal;
`;

export const StyledBoardColumnsWrapper = Styled.div`
  display: flex;
  overflow-y: auto;
  margin-top: 1rem;
  > * {
    width: 15rem;
    flex: 0 0 auto;
    &:not(:last-child){
      margin-right: 2rem;
    }
  }
`;