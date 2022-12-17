
import './App.css';
import SignIn from './components/SignIn' ;
import SignUp from './components/SignUp';

import * as ROUTES from './constants/route';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path={ROUTES.LANDING} component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
      </Switch>
    </Router> 
  );
}

export default App; 