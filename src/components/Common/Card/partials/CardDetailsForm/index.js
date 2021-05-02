import React, {useState} from 'react'
import PropTypes from 'prop-types';

import MESSAGES from "constants/messages";
import GLOBALS from "constants/globals";

import {
  StyledCardDetailsForm,
  StyledButtonsWrapper,
  StyledCancelButton,
  StyledInput,
  StyledSelect,
  StyledSubmitButton,
  StyledTextarea,
} from './styles'

const CardDetailsForm = ({className, onSubmit, onCancel}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(GLOBALS.CARD_PRIORITIES.MEDIUM)

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      title,
      description,
      priority,
    })
  }

  return (
    <StyledCardDetailsForm className={className} onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder={MESSAGES.TITLE}
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <StyledSelect
        value={priority}
        onChange={e => setPriority(e.target.value)}
        required
      >
        {Object.values(GLOBALS.CARD_PRIORITIES).map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </StyledSelect>

      <StyledTextarea
        type="text"
        placeholder={MESSAGES.DESCRIPTION}
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <StyledButtonsWrapper>
        <StyledSubmitButton type="submit">{MESSAGES.SUBMIT}</StyledSubmitButton>
        <StyledCancelButton type="button" onClick={onCancel}>{MESSAGES.CANCEL}</StyledCancelButton>
      </StyledButtonsWrapper>
    </StyledCardDetailsForm>
  )
}

CardDetailsForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
CardDetailsForm.defaultProps = {
  className: '',
}

export default CardDetailsForm