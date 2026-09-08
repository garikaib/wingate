/**
 * Wingate Golf Club - Theme Toggle & Color Scheme Management
 * Follows modern web standards:
 * - Two-state UX (System default vs Pinned opposite)
 * - Persisted in localStorage ('color-scheme')
 * - Updates meta[name="color-scheme"] and documentElement class 'dark'
 * - Listens for OS preference changes when not pinned
 */

export function initThemeToggle() {
    function getStoredScheme() {
        try {
            return localStorage.getItem('color-scheme');
        } catch (e) {
            return null;
        }
    }

    function getEffectiveScheme() {
        const stored = getStoredScheme();
        if (stored === 'dark' || stored === 'light') {
            return stored;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyScheme(scheme, persist) {
        const isDark = scheme === 'dark';
        document.documentElement.classList.toggle('dark', isDark);

        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) {
            meta.content = isDark ? 'dark' : 'light';
        }

        if (persist) {
            try {
                localStorage.setItem('color-scheme', scheme);
            } catch (e) {}
        }

        updateToggleButtons(isDark);
    }

    function updateToggleButtons(isDark) {
        const buttons = document.querySelectorAll('.wingate-theme-toggle');
        buttons.forEach((btn) => {
            btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        });
    }

    function toggleScheme() {
        const isCurrentlyDark = document.documentElement.classList.contains('dark');
        const nextScheme = isCurrentlyDark ? 'light' : 'dark';
        applyScheme(nextScheme, true);
    }

    // Event delegation for all theme toggle buttons
    document.addEventListener('click', (event) => {
        const button = event.target.closest('.wingate-theme-toggle');
        if (button) {
            event.preventDefault();
            toggleScheme();
        }
    });

    // Listen to system changes only if user hasn't explicitly chosen/pinned a scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', (e) => {
            if (!getStoredScheme()) {
                applyScheme(e.matches ? 'dark' : 'light', false);
            }
        });
    }

    // Initialize toggle button ARIA attributes
    updateToggleButtons(document.documentElement.classList.contains('dark'));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
    initThemeToggle();
}
