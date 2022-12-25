import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";


const FeaturedProducts = ({ type }) => { 
  const data =[
    {
      id : 1,
      img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
      img2:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title :"Long Sleeve Graphic T-shirt",
      isnew : true,
      oldprice: 19,
      price: 12,
    },
    {
      id : 2,
      img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
      img2:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
      title :"Coat",
      isnew : true,
      oldprice: 33,
      price: 23,
    },
    {
      id : 3,
      img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
      img2:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title :"Skirt",
      // isnew:false,
      oldprice: 25,
      price: 22,
    },
    {
      id : 4,
      img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
      img2:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title :"Hat",
      // isnew : false,
      oldprice: 30,
      price: 15,
    },
  ]                                                                                       
  ;

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} featured products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
      {  data.map(item => (<Card item={item} key={item.id} />
      ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;