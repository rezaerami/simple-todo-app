import React from 'react'
import PropTypes from 'prop-types';
import {BoardItem} from "./partials";

import MESSAGES from "constants/messages";

import {StyledBoardsList, StyledTitle} from './styles'

const BoardsList = ({className, boardsList}) => {
  return (
    <StyledBoardsList className={className}>
      <StyledTitle>{MESSAGES.BOARDS}</StyledTitle>
      {boardsList.map(board => <BoardItem key={board.id} board={board}/>)}
    </StyledBoardsList>
  )
}

BoardsList.propTypes = {
  // props
  className: PropTypes.string,
  boardsList: PropTypes.array,
}
BoardsList.defaultProps = {
  className: '',
}

export default BoardsList