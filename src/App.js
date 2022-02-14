import { BrowserRouter } from 'react-router-dom';
import { MediaContextProvider } from './config/context/MediaContext';

import Routes from './config/routes';
import GlobalStyle from './theme/globalStyle';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <MediaContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes />
      </BrowserRouter>
    </MediaContextProvider>
  );
}

export default App;
