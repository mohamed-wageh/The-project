import React from "react";
import { useState } from "react";
import "./SingleProduct.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const SingleProduct = () => {
    // const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

const images=[
    "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

];

return (
    <div className="SingleProduct">
          <div className="left">
            <div className="images"> 
              <img
                src={images[0]}
                alt=""
                onClick={(e) => setSelectedImg(0)}
              />
              <img
                src={images[1]}
                alt=""
                onClick={(e) => setSelectedImg(1)}
              />
            </div>
            <div className="mainImg">
              <img
                src={images[selectedImg]}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>Title</h1>
            <span className="price">$199</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
            <div className="quantity">
            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}> - </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
            //   onClick={() =>
            //     dispatch(
            //       addToCart({
            //         id: data.id,
            //         title: data.attributes.title,
            //         desc: data.attributes.desc,
            //         price: data.attributes.price,
            //         img: data.attributes.img.data.attributes.url,
            //         quantity,
            //       })
            //     )
            //   }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
    </div>
  );
};

export default SingleProduct;