import styled from "styled-components";

export const Icono = styled.img`
	height: 25px;
	width: 25px;
`;

export const Btn = styled.button`
	margin: 15px auto 0px auto;
	display: block;
	border-radius: 20px;
	background-color: #000000;
	border: 3px solid #EAAA00;
	color: white;
	font-weight: 600;
	font-size: 14px;
	padding: 8px 20px;
	cursor: pointer;
	.icono-mostrar{
		filter: invert(100%);
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 52px;
	padding: 28px;
	width: 48%;
	box-shadow: -2px 2px 12px 3px #000000;
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
}
`;

export const Saldo = styled.div`
	font-weight: 700;
	font-size: 32px;
	color: #000000;
`;

export const Detalle = styled.span`
	color: #EAAA00;
	font-size: 24px;
`;
