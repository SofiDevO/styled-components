import React from "react";
import styled from "styled-components"
import logo from "../../assets/images/logo.svg";
import { colorPrimario } from "../UI/variable";


const StyledHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  .imagen-logo{
    filter:invert(36%) sepia(93%) saturate(1033%) hue-rotate(3deg) brightness(95%) contrast(101%);
    }
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`


const BtnHeader = styled.a`
   text-align: center;
   padding: 5px 20px;
   margin: 0 10px;
   font-weight: 600;
   backdrop-filter: blur(5px); 
   border-radius: 4px; 
   box-shadow:
    0px 3px 6px 0px rgba(225, 225, 225, 0.5), 
    inset 0px -5px 16px 0px rgba(225, 225, 225, 0.6),
    inset 0px 1px 28px 0px rgb(255, 255, 255);
    color:${(props)=> props.primary ? "white" : colorPrimario };
    background:${(props)=> props.primary ? "transparent": "white"};
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo className="imagen-logo" src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary className="btn-secundario" href="https://google.com">
          Ayuda
        </BtnHeader>
        <BtnHeader className="btn-primario" href="https://google.com">
          Salir
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Header;
