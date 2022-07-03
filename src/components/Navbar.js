import React from "react";
import styled from "styled-components";
import { commonBtnStyle } from "../styles/style";
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"/>
          <BiSearch size={18}/>
        </Search>
        <Button>
          <MdOutlineAccountCircle size={18}/>
          Sign In
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  justify-content: flex-end;
  position: relative;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  position: absolute;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

  svg {
    color: ${({ theme }) => theme.text}
  }
`

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text}
`

const Button = styled.button`
  ${commonBtnStyle};
  margin-top: 0;
`