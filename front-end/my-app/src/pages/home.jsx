//import React from 'react';
//import Announcement from '../Design/Announcement';
import Slider from "../components/slider";
import Navbar from '../components/navbar';
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Products from "../components/Products";
import Footer from "../components/Footer/Footer";
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Slider />
            <Categories/>
            <FeaturedProducts/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};
export default Home;