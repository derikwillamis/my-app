import { Header } from './components/header/index.tsx';
import logo from './logo.svg';
import './App.css';
import { GlobalStyled } from './styles/global.ts';

function App() {
  return (
    <>
      <header className="App-header">
        <Header />
        <GlobalStyled></GlobalStyled>
        <input placeholder='' />
        <input ></input>
      </header>
    </>
  );
}
export default App;
