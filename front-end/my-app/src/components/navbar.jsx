import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
//import { Language } from "@mui/icons-material";
import React, { useContext } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";
import * as ROUTES from '../Constants/Route';
import { mobile } from "../responsive";

const Contaniers = Styled.div` 
height: 50px;
background-color: white;
${mobile({ height: "50px" })}
`;

const Wrapper = Styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Left = Styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Language = Styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = Styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = Styled.input`
border:none;
${mobile({ width: "50px" })}
`;

const Center = Styled.div`
flex: 1;
text-align: center;
`;

const Logo = Styled.h1`
font-weight: bold;
color: #006466;
cursor: pointer;
${mobile({ fontSize: "24px" })}
`;

const Right = Styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = Styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

// const myStyle ={
// fontSize: "12px",
// width: "20px",
// height: "20px",
// borderRadius: "50%",
// backgroundCcolor: "#5eb2d3",
// color: "white",
// position: "absolute",
// right: "-12px",
// top: "-12px",
// display: "flex",
// alignItems: "center",
// justifyContent: "center"
// };
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


const Navbar = () => {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Contaniers>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>

        </Left>
        <Center>
          <Logo><Link to={ROUTES.HOME} variant="body2" style={linkStyle}> FASHION GRAB</Link></Logo>
        </Center>
        <Right>
          <MenuItem><Link to={ROUTES.ALLPRODUCTS} variant="body2" style={linkStyle}> PRODUCTS</Link></MenuItem>
          <MenuItem><Link to={ROUTES.PROFILEPAGE} variant="body2" style={linkStyle}> YOUR PROFILE</Link></MenuItem>

          {
            !auth.user?.isAdmin ? (<><Link to="/signup" style={linkStyle}>
              <MenuItem>SIGN UP</MenuItem>
            </Link>
              <Link to="/signin" style={linkStyle}>
                <MenuItem>SIGN IN</MenuItem>
              </Link></>) : ''
          }

          <MenuItem>

            <div className="ShoppingCart"  >
              <Link to={ROUTES.CART} variant="body2" style={linkStyle}>

                <Badge badgeContent={4} color="primary" >
                  <ShoppingCartOutlined />
                  {/* <MenuItem>CART</MenuItem>  */}

                  {/* <span>0</span>  */}
                </Badge>
              </Link>
            </div>

          </MenuItem>
        </Right>
      </Wrapper>
    </Contaniers>

  );

};
export default Navbar;