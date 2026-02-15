import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './styles/index.css';

const headerRoot = document.getElementById('header-root');
if (headerRoot) {
    ReactDOM.createRoot(headerRoot).render(
        <React.StrictMode>
            <Header />
        </React.StrictMode>
    );
}

const homeRoot = document.getElementById('home-root');
if (homeRoot) {
    ReactDOM.createRoot(homeRoot).render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    );
}

const contactRoot = document.getElementById('contact-root');
if (contactRoot) {
    ReactDOM.createRoot(contactRoot).render(
        <React.StrictMode>
            <Contact />
        </React.StrictMode>
    );
}

const footerRoot = document.getElementById('footer-root');
if (footerRoot) {
    ReactDOM.createRoot(footerRoot).render(
        <React.StrictMode>
            <Footer />
        </React.StrictMode>
    );
}
