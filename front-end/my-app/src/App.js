
import './App.css';
import SignIn from './components/SignIn' ;
import SignUp from './components/SignUp';
import Pricing from './components/Pricing';

import * as ROUTES from './constants/route';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Pricing from './components/Pricing';

function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path={ROUTES.LANDING} component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.PRICING} component={Pricing} />
      </Switch>
    </Router> 
  );
}

export default App; 