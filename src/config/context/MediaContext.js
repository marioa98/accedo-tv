import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const MediaContext = React.createContext();

/**
 * Since the API response is static, I decided
 * to use Context API in order to persist the data and 
 * avoid multiple requests.
 */
const MediaContextProvider = ({ children }) => {
  const [medias, setMedias] = useState();

  const getMedias = async () => {
    const { data } = await axios.get('accedoTest.json', {
      baseURL: 'https://test-data-interviews.s3.eu-west-1.amazonaws.com/'
    });

    setMedias(data)
  };

  useEffect(() => {
    getMedias();
  }, []);

  const value = {
    medias
  }

  return (
    <MediaContext.Provider value={value}>
      {children}
    </MediaContext.Provider>
  )
};

MediaContextProvider.propTypes = {
  children: PropTypes.node
}

export { MediaContext, MediaContextProvider };
