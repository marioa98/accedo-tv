import React, { useContext } from 'react';

import Carousel from '../../components/Carousel/Carousel';
import { MediaContext } from '../../config/context/MediaContext';

const Home = () => {
  const { medias } = useContext(MediaContext);

  return (
    <Carousel items={medias} title="Top Movies" />
  )
}

export default Home;