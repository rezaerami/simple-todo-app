import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {columnsActions, columnsSelectors} from "ducks";
import MESSAGES from "constants/messages"

import {PlusIcon} from "resources/icons";
import {
  StyledBoardContent,
  StyledBoardTitle,
  StyledBoardColumnsWrapper,
  StyledTitle,
} from './styles';

const BoardContent = ({className, boardColumns, board}) => {
  const {title} = board;

  return (
    <StyledBoardContent className={className}>
      <StyledBoardTitle>
        <StyledTitle>{title}</StyledTitle>
      </StyledBoardTitle>
      <StyledBoardColumnsWrapper>
        {!!boardColumns.length && boardColumns.map(column => (
          <span>{column.title}</span>
        ))}
      </StyledBoardColumnsWrapper>
    </StyledBoardContent>
  )
}

BoardContent.propTypes = {
  //props
  className: PropTypes.string,
  board: PropTypes.object.isRequired,
  //redux
  boardColumns: PropTypes.array,
  createColumn: PropTypes.func,
}
BoardContent.defaultProps = {
  className: '',
}

const mapStateToProps = (state, props) => ({
  boardColumns: columnsSelectors.getBoardColumns(props.board.id)(state)
})

export default connect(mapStateToProps, {
  createColumn: columnsActions.createColumn
})(BoardContent)