import React from 'react'
import PropTypes from 'prop-types';
import {
  StyledColumn,
  StyledTitleWrapper,
  StyledTitle,
} from './styles'

const Column = ({className, column}) => {
  const {title, description} = column;


  return (
    <StyledColumn className={className}>
      <StyledTitleWrapper>
        <StyledTitle>
          <h3>
            <span>{title}</span>
            <small>{description}</small>
          </h3>
        </StyledTitle>
      </StyledTitleWrapper>
    </StyledColumn>
  )
}

Column.propTypes = {
  //props
  className: PropTypes.string,
  column: PropTypes.object.isRequired,
}
Column.defaultProps = {
  className: '',
}

export default Column