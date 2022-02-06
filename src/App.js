import { BrowserRouter } from 'react-router-dom';
import { MediaContextProvider } from './config/context/MediaContext';

import Routes from './config/routes';
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <MediaContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </MediaContextProvider>
  );
}

export default App;
