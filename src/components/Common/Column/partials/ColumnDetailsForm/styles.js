import Styled from 'styled-components'
import {Button, Input, Textarea} from 'components/Globals'
import {color} from "helpers";

export const StyledColumnDetailsForm = Styled.form``;

export const StyledButtonsWrapper = Styled.div``;

export const StyledInput = Styled(Input)`
  background: none;
  padding: 0;
  padding-bottom: 0.4rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-bottom: solid 0.1rem ${color('neutral', 'main')};
`;

export const StyledTextarea = Styled(Textarea)`
  background: none;
  padding: 0;
  padding-bottom: 0.4rem;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  border-bottom: solid 0.1rem ${color('neutral', 'main')};
`;

export const StyledSubmitButton = Styled(Button)`
  color: ${color('neutral', 'light')};
  background-color: ${color("blue", "main")};
`;

export const StyledCancelButton = Styled(Button)`
  color: ${color('neutral', 'light')};
  background-color: ${color("orange", "main")};
  margin-left: 1rem;
`;