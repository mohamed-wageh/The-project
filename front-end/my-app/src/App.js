
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';
import SignSide from './components/signSide';
import DbHome from './dashboard/dbpages/home/dbHome';
import Dbusers from './dashboard/dbpages/userlist/userList';
import DbUser from './dashboard/dbpages/user/user';
import NewUser from './dashboard/dbpages/newuser/newuser';
import DBProductList from './dashboard/dbpages/productList/productList';
import DbProduct from './dashboard/dbpages/product/product';
import NewProduct from './dashboard/dbpages/newproduct/newproduct';
import Categories from './components/Categories';
import HomeProduct from './components/ProductCard';
import Footer from './components/Footer/Footer';
// import Product1 from './components/Product1';
import CategoryItem from './components/CategoryItem';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Card from './components/Card/Card';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as ROUTES from './Constants/Route';
import { BrowserRouter as Router, Routes, Route, Redirect, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import ProductList from './pages/productlist';
import Products from "./pages/Products/Products";
// import SingleProduct from "./pages/singleProduct/singleProduct";
import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/auth-context';
import request from './services/services';
import Checkout from './pages/Checkout/Checkout';
import ProfilePage from "./pages/ProfilePage ";
import Cart from "./pages/Cart/Cart";


const theme = createTheme();

function App() {
  const [auth, setAuth, reset] = useContext(AuthContext);

  request.setErrorHandler((err) => {
    if (err.code === 401) {
      reset()
    }
  })
  // const navigate = useNavigate()

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<HomeProduct />} />
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
        <Route path={ROUTES.LANDING} element={<Cart />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ALLPRODUCTS} element={<Products />} />
        <Route path={ROUTES.PASSWORD_FORGET} element={<ForgetPassword />} />
        <Route path={ROUTES.DASHBOARD} element={<DbHome />} />
        <Route path={ROUTES.DASHBOARDUSERS} element={<Dbusers />} />
        <Route path={ROUTES.DASHBOARDUSER} element={<DbUser />} />
        <Route path={ROUTES.DASHBOARDNEWUSER} element={<NewUser />} />
        <Route path={ROUTES.DASHBOARDPRODUCTLIST} element={<DBProductList />} />
        <Route path={ROUTES.DASHBOARDPRODUCT} element={<DbProduct />} />
        <Route path={ROUTES.DASHBOARDNEWPRODUCT} element={<NewProduct />} />
        <Route path={ROUTES.CART} element={<Cart />} />
       
        <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
        <Route path={ROUTES.PROFILEPAGE} element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App; 