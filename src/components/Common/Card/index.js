import React from 'react'
import PropTypes from 'prop-types';

import {StyledCard, StyledTitle, StyledDescription} from './styles'

const Card = ({className, card}) => {
  const {title, description} = card;

  return (
    <StyledCard className={className}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledCard>
  )
}

Card.propTypes = {
  // props
  className: PropTypes.string,
  card: PropTypes.object.isRequired,
}
Card.defaultProps = {
  className: '',
}

export default Card