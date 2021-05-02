import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {cardsActions, cardsSelectors} from "ducks";
import MESSAGES from "constants/messages";
import {CardDetailsForm} from "components/Common/Card/partials";

import {StyledColumnCards, StyledButton} from 'components/Common/Column/partials/ColumnCards/styles'
import {PlusIcon} from "resources/icons";

const ColumnCards = ({className, columnId, columnCards, createCard}) => {
  const [isAddCardFormVisible, setIsAddCardFormVisible] = useState(false)


  const handleAddCardSubmit = payload => {
    createCard({
      columnId,
      ...payload,
    });
    handleAddCardFormClose();
  }

  const handleAddCardFormOpen = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsAddCardFormVisible(true);
  }

  const handleAddCardFormClose = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsAddCardFormVisible(false)
  }

  return (
    <StyledColumnCards className={className}>
      {columnCards.map(card => <span>{card.title}</span>)}

      {!isAddCardFormVisible && (
        <StyledButton
          type="button"
          onClick={handleAddCardFormOpen}
        >
        <span>{MESSAGES.ADD_CARD}</span>
        <PlusIcon width={12} />
        </StyledButton>
      )}

      {isAddCardFormVisible && (
        <CardDetailsForm
          onSubmit={handleAddCardSubmit}
          onCancel={handleAddCardFormClose}
        />
      )}
    </StyledColumnCards>
  )
}

ColumnCards.propTypes = {
  // props
  className: PropTypes.string,
  columnId: PropTypes.number.isRequired,
  // redux
  columnCards: PropTypes.array,
  createCard: PropTypes.func,
}
ColumnCards.defaultProps = {
  className: '',
}

const mapStateToProps = (state, props) => ({
  columnCards: cardsSelectors.getColumnCards(props.columnId)(state),
})

export default connect(mapStateToProps, {
  createCard: cardsActions.createCard
})(ColumnCards)