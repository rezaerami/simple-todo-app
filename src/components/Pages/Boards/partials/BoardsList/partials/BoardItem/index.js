import React from 'react'
import PropTypes from 'prop-types';
import {Link, generatePath} from "react-router-dom";

import routes from "components/Common/Router/constants/routes";
import {StyledBoardItem} from './styles'

const BoardItem = ({className, board}) => {
  const {title, id} = board;

  return (
    <StyledBoardItem className={className}>
      <Link to={generatePath(routes.boards, {boardId: id})}>
        <span>{title}</span>
      </Link>
    </StyledBoardItem>
  )
}

BoardItem.propTypes = {
  // props
  className: PropTypes.string,
  board: PropTypes.object.isRequired,
}
BoardItem.defaultProps = {
  className: '',
}

export default BoardItem