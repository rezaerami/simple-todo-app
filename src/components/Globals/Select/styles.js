import Styled from 'styled-components'
import {color} from "helpers";

export const StyledSelect = Styled.select`
  padding: 0.4rem;
  font-size: 0.8rem;
  width: 100%;
  border: solid 0.1rem ${color('gray', 'main')};
  > * {
    padding: inherit;
  }
`;