import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import {Icono,Btn, Box, Saldo, Detalle} from "../UI"
import styled from "styled-components";


const IconoMargin = styled(Icono)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(false);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <Icono className="imagen-icono " src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn className="btn" onClick={toggleHandler}>
        <IconoMargin
          className="imagen-icono"
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
