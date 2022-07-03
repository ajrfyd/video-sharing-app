import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineLibraryMusic,
  MdOutlineSportsBasketball,
  MdOutlineVideogameAsset,
  MdOutlineMovieCreation,
  MdLiveTv,
  MdOutlineSettings,
  MdOutlineHelpOutline,
  MdOutlineAccountCircle
} from "react-icons/md"; 
import { GiNewspaper } from 'react-icons/gi';
import { FiFlag } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';

const Menu = ({ darkMode, setDarkMode }) => {

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          LeeTube
        </Logo>
        <Item>
          <AiFillHome size={18} />
          Home
        </Item>
        <Item>
          <MdOutlineExplore size={18} />
          Explore
        </Item>
        <Item>
          <MdOutlineSubscriptions size={18} />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <MdOutlineVideoLibrary size={18} />
          Library
        </Item>
        <Item>
          <MdOutlineHistory size={18} />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button><MdOutlineAccountCircle size={17}/>Sign In</Button>
        </Login>
        <Hr />
        <Title>
          Best of LeeTube
        </Title>
        <Item>
          <MdOutlineLibraryMusic size={18} />
          Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball size={18} />
          Sports
        </Item>
        <Item>
          <MdOutlineVideogameAsset size={18} />
          Gaming
        </Item>
        <Item>
          <MdOutlineMovieCreation size={18} />
          Movies
        </Item>
        <Item>
          <GiNewspaper size={18} />
          News
        </Item>
        <Item>
          <MdLiveTv size={18} />
          Live
        </Item>
        <Hr />
        <Item>
          <MdOutlineSettings size={18} />
          Settings
        </Item>
        <Item>
          <FiFlag size={18} />
          Report
        </Item>
        <Item>
          <MdOutlineHelpOutline size={18} />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <HiOutlineLightBulb size={18} />
          { darkMode ? 'Light Mode' : 'Dark Mode' }
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: .5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div`
  
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer; 
  display: flex;
  align-items: center;
  gap: 5px;
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaa;
  margin-bottom: 20px;
`