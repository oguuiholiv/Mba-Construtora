import React from "react";
import styled from "styled-components";
import Splash from "../../assets/img/splash.png";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

export const IntranetContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: row;
    width: 75%;
    height: 75%;
    background-color: #fff;
    border-radius: 1.4rem;

    .splash {
      width: 50%;
      height: 100%;
      background: url(${Splash});
      background-size: cover;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }

    .content {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo {
        width: 50%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        img {
          width: 75%;
        }
      }
      .info {
        margin-top: 1rem;
        p {
          text-transform: uppercase;
          font-size: 0.8rem;
          color: #1c1c1c;
        }
      }
      .LoginForm {
        margin-top: 3rem;
        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          input {
            width: 25vw;
            height: 5vh;
            border-radius: 0.3rem;
            border: none;
            background-color: #fff;
          }
          p {
            position: relative;
            text-transform: uppercase;
            font-size: 0.7rem;
          }
          button {
            width: 20vw;
            height: 5vh;
            border-radius: 0.3rem;
            background-color: #696cff;
            color: #fff;
            border: none;
          }
        }
      }
    }
  }
`;

export const Intranet = () => {
  return (
    <IntranetContainer>
      <div className="container">
        <div className="splash"></div>
        <div className="content">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="info">
            <p>informe suas credenciais de acesso!</p>
          </div>
          <div className="LoginForm">
            <form action="" className="form">
              <input type="text" placeholder="Usuario" />
              <input type="text" placeholder="Senha" />
              <p>
                <Link to="/forgot">
                  <a href="">esqueci minha senha</a>
                </Link>
              </p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </IntranetContainer>
  );
};
