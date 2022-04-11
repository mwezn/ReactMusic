import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './components/Carasol'
import MainPage from './components/Portfolio';
import ProfilePage0 from './components/Chronixx';
import ProfilePage from './components/Weeknd'


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/slides" element={<Cards />}></Route>
      <Route path="/wknd" element={<ProfilePage />}></Route>
      <Route path="/chronixx" element={<ProfilePage0 />}></Route>
    </Routes>
    );
}
export default App;
