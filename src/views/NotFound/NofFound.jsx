import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoContent from '../../components/NoContent/NoContent';
import constants from '../../config/constants';

const NotFound = () => {
  const navigate = useNavigate();

  return(
    <NoContent
      title='404'
      message='Page not found'
      buttonLabel='Return to Home'
      onClick={() => navigate(constants.paths.root)}
    />
  )
};

export default NotFound;