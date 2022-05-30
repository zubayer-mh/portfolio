import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
