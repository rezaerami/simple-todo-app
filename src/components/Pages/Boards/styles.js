import Styled from 'styled-components';
import {color} from "helpers";

export const StyledBoardsWrapper = Styled.div`
  display: flex;
  height: 100vh;
`;


export const StyledBoardsListWrapper = Styled.div`
  height: 100%;
  background-color: ${color('gray', 'dark')};
  padding: 1rem;
  width: 18rem;
  max-width: 100%;
`;