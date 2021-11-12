import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Servicos from './components/Servicos/Servicos';
import Pacotes from './components/Pacotes/Pacotes';
import Localizacao from './components/Localizacao/Localizacao';
import { Rodape } from './components/Rodape/Rodape';
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle />
    <Cabecalho />
    <Home/>
    <Sobre />
    <Servicos/>
    <Pacotes/>
    <Localizacao/>
    <Rodape/>
    </>
  );
}

export default App;
