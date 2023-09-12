import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import ToogleDark from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(() => {
    const modoOscuroGuardado = localStorage.getItem("modoOscuro");
    return modoOscuroGuardado ? JSON.parse(modoOscuroGuardado) : true;
  });


	useEffect(() => {
		localStorage.setItem("modoOscuro", JSON.stringify(tema));
	}, [tema]);

	const toogleTema = () => {
		setTema((tema) => !tema);
	};

	return (
		<ThemeProvider theme={tema ? temaClaro : temaOscuro}>
			<GlobalStyle />
			<BtnTema onClick={toogleTema}>
				<ToogleDark tema={tema} />
			</BtnTema>
			<Header />
			<Container />
		</ThemeProvider>
	);
}

export default App;
