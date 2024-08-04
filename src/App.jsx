import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './pages/Profile';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/aboutMe" element={<AboutMe />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contactMe" element={<ContactMe />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
