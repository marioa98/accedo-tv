import React from 'react';

import Carousel from '../../components/Carousel/Carousel';
import useVideoHistory from '../../hooks/useVideoHistory';

const History = () => {
  const { historyItems } = useVideoHistory();

  return (
    <Carousel items={historyItems} title="Recently watched" />
  )
}

export default History;
