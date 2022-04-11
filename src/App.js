import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './components/Carasol'
import MainPage from './components/Portfolio';
import Profile from './components/Profile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/slides" element={<Cards />}></Route>
      <Route path="/chronixx" element={<Profile id="0"/>}></Route>
      <Route path="/gc" element={<Profile id="1" />}></Route>
      <Route path="/wknd" element={<Profile id="2" />}></Route>
    </Routes>
    );
}
export default App;
