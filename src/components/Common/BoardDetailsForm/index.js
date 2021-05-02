import React, {useState} from 'react'
import PropTypes from 'prop-types';

import MESSAGES from "constants/messages";
import {Input, Textarea} from 'components/Globals'

import {
  StyledBoardDetailsForm,
  StyledTitle,
  StyledButtonsWrapper,
  StyledSubmitButton,
  StyledCancelButton
} from './styles'

const BoardDetailsForm = ({className, onSubmit, onCancel}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      title,
      description,
    })
  }

  return (
    <StyledBoardDetailsForm className={className} onSubmit={handleSubmit}>
      <StyledTitle>{MESSAGES.ADD_BOARD}</StyledTitle>
      <Input
        type="text"
        placeholder={MESSAGES.TITLE}
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <Textarea
        type="text"
        placeholder={MESSAGES.DESCRIPTION}
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <StyledButtonsWrapper>
        <StyledSubmitButton type="submit">{MESSAGES.SUBMIT}</StyledSubmitButton>
        {onCancel && typeof onCancel ==="function" && (
          <StyledCancelButton type="button" onClick={onCancel}>{MESSAGES.CANCEL}</StyledCancelButton>
        )}
      </StyledButtonsWrapper>
    </StyledBoardDetailsForm>
  )
}

BoardDetailsForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
}
BoardDetailsForm.defaultProps = {
  className: '',
  onCancel: false,
}

export default BoardDetailsForm