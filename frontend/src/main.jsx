import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './pages/Spline';
import RecentEmails from './pages/Getmail.jsx';
import Header from './pages/header.jsx'; 
import Footer from './pages/Footer.jsx'; 

createRoot(document.getElementById('root')).render(
  

 
  <StrictMode>
    {/* <Home/> */}
    
    <Header />
    <App />
    <Footer/>
    
  </StrictMode>,


)
