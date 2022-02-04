import { Routes as Router, Route } from 'react-router-dom';
import Home from '../views/Home/Home';

const Routes = () => (
  <Router>
    <Route path="/">
      <Route index element={<Home />} />
    </Route>
  </Router>
);

export default Routes;
