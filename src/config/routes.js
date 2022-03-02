import { Routes as Router, Route } from 'react-router-dom';
import { History, Home, NotFound, Player } from '../views';
import constants from './constants';
const { paths } = constants;

const Routes = () => (
  <Router>
    <Route path='*' element={<NotFound />} />
    <Route path={paths.root}>
      <Route index element={<Home />} />
      <Route path={paths.video}>
        <Route path=":videoId" element={<Player />}/>
      </Route>
      <Route path={paths.videoHistory} element={<History />} />
    </Route>
  </Router>
);

export default Routes;
