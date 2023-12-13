import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import UserInfoPage from './pages/UserInfoPage';

function App() {
  return (
    <div>
    <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/about/:id' element={<UserInfoPage/>}/>
        <Route path='/contacts' element={<ContactPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
