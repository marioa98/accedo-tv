import { Routes as Router, Route } from 'react-router-dom';
import { Home, Player } from '../views';

const Routes = () => (
  <Router>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="videos">
        <Route path=":videoId" element={<Player />}/>
      </Route>
    </Route>
  </Router>
);

export default Routes;
