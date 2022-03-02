import { BrowserRouter } from 'react-router-dom';
import { MediaContextProvider } from './config/context/MediaContext';

import Routes from './config/routes';
import GlobalStyle from './theme/globalStyle';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <MediaContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </MediaContextProvider>
  );
}

export default App;
