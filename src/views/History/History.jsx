import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DeleteButton from '../../components/Buttons/DeleteButton';

import Carousel from '../../components/Carousel/Carousel';
import NoContent from '../../components/NoContent/NoContent';
import Popup from '../../components/Popup/Popup';
import constants from '../../config/constants';
import useVideoHistory from '../../hooks/useVideoHistory';

const { paths } = constants;

const Div = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 45vw;

  @media only screen and (max-width:1000px) {
    margin-left: 40vw;
  }

  @media only screen and (max-width:600px) {
    margin-left: 30vw;
  }
`

const History = () => {
  const [isPopupOpen, setPopupVisibility] = useState(false);
  const { historyItems, removeAll } = useVideoHistory();
  const navigate = useNavigate()

  const onAccept = () => {
    removeAll();
    setPopupVisibility(false);
  }

  return (
    <>
      <Popup
        isOpen={isPopupOpen}
        message="Do you really want to delete all your history"
        onCancel={() => setPopupVisibility(false)}
        onAccept={onAccept}
      />
      {historyItems?.length ? (
        <>
          <Carousel items={historyItems} title="Recently watched" />
          <Div>
            <DeleteButton onClick={() => setPopupVisibility(true)}>
              Delete History
            </DeleteButton>
          </Div>
        </>
      ) : (
        <NoContent
          title='Ups. No items in your history'
          message='Enjoy something from our catalog'
          buttonLabel='Return to Home'
          onClick={() => navigate(paths.root)}
        />
      )}
    </>
  )
}

export default History;
