import React from 'react';
//import Announcement from '../Design/Announcement';
import Slider from "../components/slider";
import Navbar from '../components/Navbar';
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import ProductList from "../components/productList";
import Footer from "../components/Footer/Footer";
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Slider />
            <Categories />
            <FeaturedProducts />
            <ProductList />
            <Newsletter />
            <Footer />
            
        </div>
    );
};
export default Home;