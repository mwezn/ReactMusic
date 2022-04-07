import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './components/Carasol'
import MainPage from './components/Portfolio';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/slides" element={<Cards />}></Route>
    </Routes>
    );
}
export default App;
