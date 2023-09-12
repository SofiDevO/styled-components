import styled from "styled-components";

export const Icono = styled.img`
	height: 25px;
	width: 25px;
	filter: ${({theme})=> theme.filter};

`;

export const Btn = styled.button`
	margin: 15px auto 0px auto;
	display: block;
	border-radius: 20px;
	background-color: #000000;
	border: 3px solid #eaaa00;
	color: white;
	font-weight: 600;
	font-size: 14px;
	padding: 8px 20px;
	cursor: pointer;
	.imagen-icono {
		filter: invert(100%);
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 52px;
	background-color: ${({ theme }) => theme.inside};
	padding: 28px;
	width: 48%;
	box-shadow:  ${({ theme }) => theme.shadow};
	@media (max-width: 800px) {
		width: 95%;
		margin: 5px;
	}
`;

export const Saldo = styled.div`
	font-weight: 700;
	font-size: 32px;
	color: ${({theme})=> theme.text};
`;

export const Detalle = styled.span`
	color: #eaaa00;
	font-size: 24px;
`;

export const BtnTema = styled.div`
	position: fixed;
	font-size: 24px;
	top: 91vh;
	right: 32px;
	background-color: inherit;
	border: none;
	cursor: pointer;
`;
