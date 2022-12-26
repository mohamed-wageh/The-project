
import './App.css';
import SignIn from './components/SignIn' ;
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';
import productList from './components/productList';
import Product from './components/product';
import SignSide from './components/signSide';
import DbHome from './dashboard/dbpages/home/dbHome';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer/Footer';
// import Product1 from './components/Product1';
import CategoryItem from './components/CategoryItem';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Card from './components/Card/Card';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as ROUTES from './Constants/Route';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<Home  />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.PASSWORD_FORGET} element={<ForgetPassword />} />
          <Route path={ROUTES.DASHBOARD} element={<DbHome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 