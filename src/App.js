import logo from './logo.svg';
import './App.css';
import MainRouter from "./MainRouter";
import Slogan from "./utils/Slogan";

function App() {
  return (
      <div>
        <MainRouter/>
        <footer className="border">
          <Slogan compToRight="Создано 2021"/>
        </footer>
      </div>
  );
}

export default App;
