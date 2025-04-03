import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import './App.css';

function App() {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
        <Header />
        <main className='min-h-[calc(100dvh-6.25rem)]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
