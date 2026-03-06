import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './clubhouse-block-effects';

const pageMounts = [
    ['home-root', () => import('./pages/Home')],
    ['contact-root', () => import('./pages/Contact')],
    ['membership-root', () => import('./pages/Membership')],
    ['rates-root', () => import('./pages/Rates')],
    ['course-root', () => import('./pages/Course')],
    ['not-found-root', () => import('./pages/NotFound')],
    ['hole-by-hole-root', () => import('./pages/HoleByHole')],
    ['green-fees-root', () => import('./pages/GreenFees')],
    ['events-admin-root', () => import('./pages/EventsAdmin')],
    ['home-settings-admin-root', () => import('./pages/HomeSettingsAdmin')],
    ['contact-page-settings-admin-root', () => import('./pages/ContactPageSettingsAdmin')],
    ['course-settings-admin-root', () => import('./pages/CourseSettingsAdmin')],
    ['hole-by-hole-admin-root', () => import('./pages/HoleByHoleAdmin')],
    ['green-fees-settings-admin-root', () => import('./pages/GreenFeesSettingsAdmin')],
    ['booking-settings-admin-root', () => import('./pages/BookingSettingsAdmin')],
    ['news-layout-settings-admin-root', () => import('./pages/NewsLayoutSettingsAdmin')],
    ['rates-admin-root', () => import('./pages/RatesAdmin')],
    ['membership-admin-root', () => import('./pages/MembershipAdmin')],
    ['edit-pages-gateway-admin-root', () => import('./pages/EditPagesGatewayAdmin')],
    ['menu-builder-admin-root', () => import('./pages/MenuBuilderAdmin')],
    ['mens-handicap-root', () => import('./pages/MensHandicap')],
    ['handicap-main-root', () => import('./pages/HandicapMain')],
    ['ladies-handicap-root', () => import('./pages/LadiesHandicap')],
    ['kitchen-root', () => import('./pages/Kitchen')],
    ['bar-root', () => import('./pages/LoyalAncient')],
];

function mountPage(rootId, loadPage) {
    const root = document.getElementById(rootId);
    if (!root) {
        return;
    }

    loadPage()
        .then(({ default: Page }) => {
            ReactDOM.createRoot(root).render(
                <React.StrictMode>
                    <Page />
                </React.StrictMode>
            );
        })
        .catch((error) => {
            console.error(`Failed to load page module for ${rootId}.`, error);
        });
}

pageMounts.forEach(([rootId, loadPage]) => {
    mountPage(rootId, loadPage);
});
