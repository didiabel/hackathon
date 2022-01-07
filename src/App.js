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

function App() {
  return (
    <UserProvider>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
      <Footer />
      </Router> 
    </UserProvider>
  );
}

export default App;
