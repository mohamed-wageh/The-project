import './App.css';
//import Product_List from './components/product/Product_List.jsx';
import * as ROUTES from './Constants/Route';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.LANDING} element={<Home/>}/>
        <Route path={ROUTES.HOME} component={Home} />
      </Routes>
    </Router>
  );
}

export default App;