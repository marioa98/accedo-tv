import React from 'react';

const defaulViewport = {
  width: 0,
  height: 0
}

const useViewport = () => {
  const [viewport, setViewport] = React.useState(defaulViewport)

  const getViewport = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setViewport(() => ({
      height,
      width
    }));
  }

  React.useEffect(() => {
    getViewport();

    window.addEventListener('resize', getViewport);

    return () => {
      window.removeEventListener('resize', getViewport);
    }
  }, []);

  return viewport;
}

export default useViewport;
