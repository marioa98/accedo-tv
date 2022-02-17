import React from 'react';
import PropTypes from 'prop-types';
import PopupContainer from './theme/PopupContainer';
import PopupArea from './theme/PopupArea';
import PopupButtons from './theme/PopupButtons';
import Button from '../Buttons/Button';
import DeleteButton from '../Buttons/DeleteButton';

const Popup = ({
  title = 'Please confirm',
  message,
  onAccept,
  onCancel,
  isOpen
}) => isOpen && (
  <PopupContainer>
    <PopupArea>
      <h1>{title}</h1>
      <p>{message}</p>
      <PopupButtons>
        {onAccept && <Button onClick={onAccept} className="secondary">OK</Button>}
        {onCancel && <DeleteButton onClick={onCancel}>Cancel</DeleteButton>}
      </PopupButtons>
    </PopupArea>
  </PopupContainer>
);

Popup.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}

export default Popup;
