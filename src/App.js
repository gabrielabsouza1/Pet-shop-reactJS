import './App.css';
import Cabecalho from './components/Cabecalho';
import Home from './components/Home';
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle />
    <Cabecalho />
    <Home/>
    </>
  );
}

export default App;
