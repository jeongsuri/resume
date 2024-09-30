'use client';
import React from 'react';
import { Header } from 'react-fullpage';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #000;
  a {
    padding: 0 30px;
    line-height: 49px;
    font-size: 1.75rem;
  }

  @media all and(max-width:420px) {
    a {
      padding: 0 15px;
      font-size: 1.65rem;
    }
  }
`;

const TopMenu = () => {
  return (
    <Header>
      <StyledNav>
        <a href="#sectionOne">INFO & ABOUT</a>
        <a href="#sectionTwo">EXPERIENCE</a>
        <a href="#sectionThree">PORTFOLIO</a>
      </StyledNav>
    </Header>
  );
};

export default React.memo(TopMenu);
