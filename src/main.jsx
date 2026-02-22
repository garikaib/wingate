import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './styles/index.css';
import './clubhouse-block-effects';

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

const homeSettingsAdminRoot = document.getElementById('home-settings-admin-root');
if (homeSettingsAdminRoot) {
    import('./pages/HomeSettingsAdmin').then(({ default: HomeSettingsAdmin }) => {
        ReactDOM.createRoot(homeSettingsAdminRoot).render(
            <React.StrictMode>
                <HomeSettingsAdmin />
            </React.StrictMode>
        );
    });
}

const contactPageSettingsAdminRoot = document.getElementById('contact-page-settings-admin-root');
if (contactPageSettingsAdminRoot) {
    import('./pages/ContactPageSettingsAdmin').then(({ default: ContactPageSettingsAdmin }) => {
        ReactDOM.createRoot(contactPageSettingsAdminRoot).render(
            <React.StrictMode>
                <ContactPageSettingsAdmin />
            </React.StrictMode>
        );
    });
}

const courseSettingsAdminRoot = document.getElementById('course-settings-admin-root');
if (courseSettingsAdminRoot) {
    import('./pages/CourseSettingsAdmin').then(({ default: CourseSettingsAdmin }) => {
        ReactDOM.createRoot(courseSettingsAdminRoot).render(
            <React.StrictMode>
                <CourseSettingsAdmin />
            </React.StrictMode>
        );
    });
}

const holeByHoleAdminRoot = document.getElementById('hole-by-hole-admin-root');
if (holeByHoleAdminRoot) {
    import('./pages/HoleByHoleAdmin').then(({ default: HoleByHoleAdmin }) => {
        ReactDOM.createRoot(holeByHoleAdminRoot).render(
            <React.StrictMode>
                <HoleByHoleAdmin />
            </React.StrictMode>
        );
    });
}

const greenFeesSettingsAdminRoot = document.getElementById('green-fees-settings-admin-root');
if (greenFeesSettingsAdminRoot) {
    import('./pages/GreenFeesSettingsAdmin').then(({ default: GreenFeesSettingsAdmin }) => {
        ReactDOM.createRoot(greenFeesSettingsAdminRoot).render(
            <React.StrictMode>
                <GreenFeesSettingsAdmin />
            </React.StrictMode>
        );
    });
}

const bookingSettingsAdminRoot = document.getElementById('booking-settings-admin-root');
if (bookingSettingsAdminRoot) {
    import('./pages/BookingSettingsAdmin').then(({ default: BookingSettingsAdmin }) => {
        ReactDOM.createRoot(bookingSettingsAdminRoot).render(
            <React.StrictMode>
                <BookingSettingsAdmin />
            </React.StrictMode>
        );
    });
}

const newsLayoutSettingsAdminRoot = document.getElementById('news-layout-settings-admin-root');
if (newsLayoutSettingsAdminRoot) {
    import('./pages/NewsLayoutSettingsAdmin').then(({ default: NewsLayoutSettingsAdmin }) => {
        ReactDOM.createRoot(newsLayoutSettingsAdminRoot).render(
            <React.StrictMode>
                <NewsLayoutSettingsAdmin />
            </React.StrictMode>
        );
    });
}

const ratesAdminRoot = document.getElementById('rates-admin-root');
if (ratesAdminRoot) {
    import('./pages/RatesAdmin').then(({ default: RatesAdmin }) => {
        ReactDOM.createRoot(ratesAdminRoot).render(
            <React.StrictMode>
                <RatesAdmin />
            </React.StrictMode>
        );
    });
}

const membershipAdminRoot = document.getElementById('membership-admin-root');
if (membershipAdminRoot) {
    import('./pages/MembershipAdmin').then(({ default: MembershipAdmin }) => {
        ReactDOM.createRoot(membershipAdminRoot).render(
            <React.StrictMode>
                <MembershipAdmin />
            </React.StrictMode>
        );
    });
}

const editPagesGatewayAdminRoot = document.getElementById('edit-pages-gateway-admin-root');
if (editPagesGatewayAdminRoot) {
    import('./pages/EditPagesGatewayAdmin').then(({ default: EditPagesGatewayAdmin }) => {
        ReactDOM.createRoot(editPagesGatewayAdminRoot).render(
            <React.StrictMode>
                <EditPagesGatewayAdmin />
            </React.StrictMode>
        );
    });
}

const mensHandicapRoot = document.getElementById('mens-handicap-root');
if (mensHandicapRoot) {
    import('./pages/MensHandicap').then(({ default: MensHandicap }) => {
        ReactDOM.createRoot(mensHandicapRoot).render(
            <React.StrictMode>
                <MensHandicap />
            </React.StrictMode>
        );
    });
}

const handicapMainRoot = document.getElementById('handicap-main-root');
if (handicapMainRoot) {
    import('./pages/HandicapMain').then(({ default: HandicapMain }) => {
        ReactDOM.createRoot(handicapMainRoot).render(
            <React.StrictMode>
                <HandicapMain />
            </React.StrictMode>
        );
    });
}

const ladiesHandicapRoot = document.getElementById('ladies-handicap-root');
if (ladiesHandicapRoot) {
    import('./pages/LadiesHandicap').then(({ default: LadiesHandicap }) => {
        ReactDOM.createRoot(ladiesHandicapRoot).render(
            <React.StrictMode>
                <LadiesHandicap />
            </React.StrictMode>
        );
    });
}

const kitchenRoot = document.getElementById('kitchen-root');
if (kitchenRoot) {
    import('./pages/Kitchen').then(({ default: Kitchen }) => {
        ReactDOM.createRoot(kitchenRoot).render(
            <React.StrictMode>
                <Kitchen />
            </React.StrictMode>
        );
    });
}

const barRoot = document.getElementById('bar-root');
if (barRoot) {
    import('./pages/LoyalAncient').then(({ default: LoyalAncient }) => {
        ReactDOM.createRoot(barRoot).render(
            <React.StrictMode>
                <LoyalAncient />
            </React.StrictMode>
        );
    });
}
