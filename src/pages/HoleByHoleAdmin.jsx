import React, { useState, useEffect } from 'react';
import MediaPicker from '../components/MediaPicker';
import MapLineEditor from '../components/MapLineEditor';

const HoleByHoleAdmin = () => {
    const [settings, setSettings] = useState({
        hero: { title: '', subtitle: '', kicker: '', backgroundImage: '' },
        intro: { title: '', content: '' },
        holes: []
    });
    const [activeHole, setActiveHole] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const apiRoot = window.wingateAdminData?.root || '/wp-json/';
    const nonce = window.wingateAdminData?.nonce || '';

    useEffect(() => {
        // Parse URL params for deep linking
        const params = new URLSearchParams(window.location.search);
        const holeParam = parseInt(params.get('hole'), 10);
        if (!isNaN(holeParam) && holeParam >= 1 && holeParam <= 18) {
            setActiveHole(holeParam);
        }

        // Load Leaflet CSS and JS
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
            link.crossOrigin = '';
            document.head.appendChild(link);
        }

        if (!document.getElementById('leaflet-js')) {
            const script = document.createElement('script');
            script.id = 'leaflet-js';
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
            script.crossOrigin = '';
            // We need to wait for it to load before fetching settings so the map can render if needed immediately
            script.onload = fetchSettings;
            document.head.appendChild(script);
        } else {
            fetchSettings();
        }
    }, []);

    const fetchSettings = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${apiRoot}wingate/v1/hole-by-hole`);
            if (!response.ok) throw new Error('Failed to fetch settings');
            const data = await response.json();
            setSettings(data);
        } catch (err) {
            setMessage({ text: 'Error loading settings: ' + err.message, type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        setMessage({ text: '', type: '' });

        try {
            const response = await fetch(`${apiRoot}wingate/v1/hole-by-hole`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error('Failed to save settings');

            setMessage({ text: 'Settings saved successfully!', type: 'success' });
            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
        } catch (err) {
            setMessage({ text: 'Error saving settings: ' + err.message, type: 'error' });
        } finally {
            setIsSaving(false);
        }
    };

    const updateNestedSetting = (section, field, value) => {
        setSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const updateHoleSetting = (holeNumber, field, value) => {
        setSettings(prev => ({
            ...prev,
            holes: prev.holes.map(hole =>
                hole.hole === holeNumber
                    ? { ...hole, [field]: value }
                    : hole
            )
        }));
    };

    const handleHoleChange = (newHole) => {
        setActiveHole(newHole);
        // Update URL to support deep linking and sharing
        const url = new URL(window.location);
        url.searchParams.set('hole', newHole);
        window.history.pushState({}, '', url);
    };

    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Loading Hole by Hole settings...</div>;
    }

    const currentHoleData = settings.holes?.find(h => h.hole === activeHole) || { image: '', description: '' };

    return (
        <div className="wingate-admin-spa max-w-5xl mx-auto p-6 font-montserrat">
            <header className="mb-8 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-cinzel font-bold text-brand-blue mb-1">
                        Hole By Hole <span className="text-brand-yellow">Settings</span>
                    </h1>
                    <p className="text-gray-500 text-sm">Manage the visual content for the Hole by Hole page.</p>
                </div>
            </header>

            {/* Floating Save Bar */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
                {message.text && (
                    <div className={`px-4 py-3 rounded-lg shadow-lg text-sm font-bold pointer-events-auto transform transition-all duration-300 ${message.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'} animate-fade-in-up`}>
                        {message.text}
                    </div>
                )}
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="pointer-events-auto bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-3 px-8 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                    {isSaving ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Saving...
                        </>
                    ) : 'Save All Settings'}
                </button>
            </div>

            <div className="space-y-8">
                {/* Hero Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">1</span>
                        Hero Section
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Kicker</label>
                                <input type="text" value={settings.hero.kicker} onChange={e => updateNestedSetting('hero', 'kicker', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                                <input type="text" value={settings.hero.title} onChange={e => updateNestedSetting('hero', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Subtitle</label>
                                <input type="text" value={settings.hero.subtitle} onChange={e => updateNestedSetting('hero', 'subtitle', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Background Image</label>
                            <MediaPicker value={settings.hero.backgroundImage} onSelect={(url) => updateNestedSetting('hero', 'backgroundImage', url)} />
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">2</span>
                        Intro Section
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                            <input type="text" value={settings.intro.title} onChange={e => updateNestedSetting('intro', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Content</label>
                            <textarea
                                value={settings.intro.content}
                                onChange={e => updateNestedSetting('intro', 'content', e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm"
                                rows="4"
                            />
                        </div>
                    </div>
                </section>

                {/* Hole Editor Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-cinzel text-brand-blue font-bold flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">3</span>
                            Hole Content Editor
                        </h2>
                        <div className="flex items-center gap-3">
                            <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Select Hole:</label>
                            <select
                                value={activeHole}
                                onChange={(e) => handleHoleChange(Number(e.target.value))}
                                className="border-gray-300 rounded-md shadow-sm font-cinzel font-bold text-brand-blue text-lg"
                            >
                                {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
                                    <option key={num} value={num}>Hole {num}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="bg-brand-gray/30 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-4">
                            <div className="bg-brand-blue text-white px-4 py-2 rounded-md inline-block mb-2">
                                <span className="text-xs uppercase tracking-widest opacity-75 mr-2">Editing</span>
                                <span className="font-cinzel font-bold text-xl text-brand-yellow">Hole {activeHole}</span>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Hole Description</label>
                                <textarea
                                    value={currentHoleData.description}
                                    onChange={e => updateHoleSetting(activeHole, 'description', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm min-h-[150px]"
                                    placeholder="Enter the description and strategy for this hole..."
                                />
                                <p className="text-xs text-gray-400 mt-2 italic">Note: Par, Index, and Distances for Hole {activeHole} are managed in the <a href="?page=wingate-scorecard-maker" className="text-brand-blue underline">Scorecard Maker</a>.</p>
                            </div>
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Hole Image</label>
                            <MediaPicker
                                value={currentHoleData.image}
                                onSelect={(url) => updateHoleSetting(activeHole, 'image', url)}
                            />

                            <MapLineEditor
                                pathData={currentHoleData.path || []}
                                onChange={(newPath) => updateHoleSetting(activeHole, 'path', newPath)}
                                holeNumber={activeHole}
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default HoleByHoleAdmin;
