import './App.css';
import Inicio from './components/Inicio';
import Peliculas from './components/Peliculas';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserProvider from './Store/appContext'
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { useParams } from 'react-router-dom';
import Favoritos from './components/Favoritos';

function App() {
  return (
    <UserProvider>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas  />} />
          <Route path="/peliculas/:id" element={<Cards  />} />
          <Route path='/favoritos' element={<Favoritos/>} />
        </Routes>
      <Footer />
      </Router> 
    </UserProvider>
  );
}

export default App;
