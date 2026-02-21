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

const membershipRoot = document.getElementById('membership-root');
if (membershipRoot) {
    import('./pages/Membership').then(({ default: Membership }) => {
        ReactDOM.createRoot(membershipRoot).render(
            <React.StrictMode>
                <Membership />
            </React.StrictMode>
        );
    });
}

const ratesRoot = document.getElementById('rates-root');
if (ratesRoot) {
    import('./pages/Rates').then(({ default: Rates }) => {
        ReactDOM.createRoot(ratesRoot).render(
            <React.StrictMode>
                <Rates />
            </React.StrictMode>
        );
    });
}

const courseRoot = document.getElementById('course-root');
if (courseRoot) {
    import('./pages/Course').then(({ default: Course }) => {
        ReactDOM.createRoot(courseRoot).render(
            <React.StrictMode>
                <Course />
            </React.StrictMode>
        );
    });
}

const notFoundRoot = document.getElementById('not-found-root');
if (notFoundRoot) {
    import('./pages/NotFound').then(({ default: NotFound }) => {
        ReactDOM.createRoot(notFoundRoot).render(
            <React.StrictMode>
                <NotFound />
            </React.StrictMode>
        );
    });
}


const holeByHoleRoot = document.getElementById('hole-by-hole-root');
if (holeByHoleRoot) {
    import('./pages/HoleByHole').then(({ default: HoleByHole }) => {
        ReactDOM.createRoot(holeByHoleRoot).render(
            <React.StrictMode>
                <HoleByHole />
            </React.StrictMode>
        );
    });
}

const greenFeesRoot = document.getElementById('green-fees-root');
if (greenFeesRoot) {
    import('./pages/GreenFees').then(({ default: GreenFees }) => {
        ReactDOM.createRoot(greenFeesRoot).render(
            <React.StrictMode>
                <GreenFees />
            </React.StrictMode>
        );
    });
}

const eventsAdminRoot = document.getElementById('events-admin-root');
if (eventsAdminRoot) {
    import('./pages/EventsAdmin').then(({ default: EventsAdmin }) => {
        ReactDOM.createRoot(eventsAdminRoot).render(
            <React.StrictMode>
                <EventsAdmin />
            </React.StrictMode>
        );
    });
}

const clubHouseRoot = document.getElementById('club-house-root');
if (clubHouseRoot) {
    import('./pages/ClubHouse').then(({ default: ClubHouse }) => {
        ReactDOM.createRoot(clubHouseRoot).render(
            <React.StrictMode>
                <ClubHouse />
            </React.StrictMode>
        );
    });
}
