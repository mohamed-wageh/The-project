import { Badge }from "@mui/material";
import { Search,ShoppingCartOutlined } from "@mui/icons-material";
//import { Language } from "@mui/icons-material";
import React from "react" ;
import Styled from "styled-components";

const Contaniers = Styled.div` 
height: 60px;
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
`;

const Center = Styled.div`
flex: 1;
text-align: center;
`;

const Logo = Styled.h1`
font-weight: bold;
`

const Right = Styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = Styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

const navbar = () => {
    return (
        <Contaniers>  
            <Wrapper>
                <Left>
                 <Language>En</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{ color: "gray", fontSize: 16 }}/>
                </SearchContainer>
                </Left>
                    <Center>
                        <Logo>LAMA.</Logo>
                        </Center>
                    <Right>
                       <MenuItem>REGISTER</MenuItem>
                       <MenuItem>SIGN IN</MenuItem>
                       <MenuItem>
                       <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined/>
                       </Badge>
                       </MenuItem>
                    </Right>
            </Wrapper>
        </Contaniers>

    );

};
export default navbar;