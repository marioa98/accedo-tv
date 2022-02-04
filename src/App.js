import { BrowserRouter } from 'react-router-dom';
import { MediaContextProvider } from './config/context/MediaContext';

import Routes from './config/routes';

function App() {
  return (
    <MediaContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MediaContextProvider>
  );
}

export default App;
