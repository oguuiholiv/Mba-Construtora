import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/img/logo.png";
import Menu from "../../../assets/svg/menu.svg";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  background: transparent;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 50%;
    height: 100%;
    margin-left: 1rem;
    align-items: center;
    img {
      width: 10vw;
      align-items: center;
    }
  }
  .menu {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.5rem;
    margin-right: 1.4rem;
    .btnLogin {
      border-radius: 1rem;
      border: none;
      width: 10vw;
      height: 5vh;
      background-color: #ffbb00;
      transition: all 0.2s ease-in-out;
    }
    .btnLogin:hover {
      background-color: #373737;
    }
    .btnMenu {
      border: none;
      background-color: transparent;
      img {
        width: 2.5vw;
      }
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <Link to="/intranet">
            <button className="btnLogin">Login</button>
          </Link>

          <button className="btnMenu">
            <img src={Menu} type="image/svg" alt="" />
          </button>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
