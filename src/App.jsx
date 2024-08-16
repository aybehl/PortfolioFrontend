import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './pages/Profile';
import ContactMe from './pages/ContactMe';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/contactMe" element={<ContactMe />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
