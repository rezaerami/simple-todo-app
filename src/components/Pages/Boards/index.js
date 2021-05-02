import React  from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {boardsSelectors} from "ducks";

import {BoardsList} from './partials'
import {
  StyledBoardsWrapper,
  StyledBoardsListWrapper,
} from './styles';

const Boards = ({ className, boardsList }) => {

  return (
    <StyledBoardsWrapper className={className}>
      <StyledBoardsListWrapper>
        <BoardsList boardsList={boardsList} />
      </StyledBoardsListWrapper>
    </StyledBoardsWrapper>
  );
};

Boards.propTypes = {
  // props
  className: PropTypes.string,
  // redux
  boardsList: PropTypes.array,
};
Boards.defaultProps = {
  className: '',
};

const mapStateToProps = state => ({
  boardsList: boardsSelectors.getBoardsList(state)
})

export default connect(mapStateToProps)(Boards);
