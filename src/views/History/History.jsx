import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Buttons/Button';
import DeleteButton from '../../components/Buttons/DeleteButton';

import Carousel from '../../components/Carousel/Carousel';
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

const NoItemsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;

  div {
    position: relative;
    text-align: center;
    top: 30vh;
  }

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }

  button {
    font-size: 16px;
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
        <NoItemsContainer>
          <div>
            <h1>Ups. No items in your history</h1>
            <p>Enjoy something from our catalog</p>
            <Button className="primary" onClick={() => navigate(paths.root)}>
              Return to Home
            </Button>
          </div>
        </NoItemsContainer>
      )}
    </>
  )
}

export default History;
