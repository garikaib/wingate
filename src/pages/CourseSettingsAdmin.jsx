import React, { useState, useEffect } from 'react';
import MediaPicker from '../components/MediaPicker';

const CourseSettingsAdmin = () => {
    const [settings, setSettings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const apiData = window.wingateAdminData || {};
    const apiRoot = apiData.root || '/wp-json/';
    const nonce = apiData.nonce || '';

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${apiRoot}wingate/v1/course-settings`);
            if (!response.ok) throw new Error('Failed to fetch settings');
            const data = await response.json();
            setSettings(data);
        } catch (err) {
            setMessage({ text: 'Error loading settings: ' + err.message, type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage({ text: '', type: '' });

        try {
            const response = await fetch(`${apiRoot}wingate/v1/course-settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error('Failed to save settings');
            setMessage({ text: 'Settings saved successfully!', type: 'success' });
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

    const updateStatSetting = (field, value) => {
        setSettings(prev => ({
            ...prev,
            intro: {
                ...prev.intro,
                stats: {
                    ...prev.intro.stats,
                    [field]: value
                }
            }
        }));
    };

    if (isLoading) {
        return (
            <div className="p-8">
                <p className="animate-pulse text-gray-500 font-montserrat uppercase tracking-widest">Loading settings...</p>
            </div>
        );
    }

    return (
        <div className="wingate-admin-spa p-8 max-w-5xl font-montserrat">
            <header className="mb-10">
                <h1 className="text-4xl font-cinzel text-brand-blue font-bold mb-2 uppercase tracking-wide">The Course Settings</h1>
                <p className="text-gray-600">Customize the appearance and data of the Course information page.</p>
            </header>

            {message.text && (
                <div className={`p-4 mb-8 rounded shadow-sm border-l-4 ${message.type === 'error' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-green-50 border-green-500 text-green-700'}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSave} className="space-y-12">
                {/* Hero Section */}
                <section className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest">Hero Section</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Kicker</label>
                                <input
                                    type="text"
                                    value={settings.hero.kicker}
                                    onChange={(e) => updateNestedSetting('hero', 'kicker', e.target.value)}
                                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    value={settings.hero.title}
                                    onChange={(e) => updateNestedSetting('hero', 'title', e.target.value)}
                                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                                />
                            </div>
                        </div>
                        <MediaPicker
                            label="Hero Background Image"
                            value={settings.hero.backgroundImage}
                            onSelect={(url) => updateNestedSetting('hero', 'backgroundImage', url)}
                        />
                    </div>
                </section>

                {/* Intro Section */}
                <section className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest">Intro Section</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Intro Title (use \n for line breaks)</label>
                                <textarea
                                    value={settings.intro.title}
                                    onChange={(e) => updateNestedSetting('intro', 'title', e.target.value)}
                                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none h-24 font-cinzel"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Intro Content</label>
                                <textarea
                                    value={settings.intro.content}
                                    onChange={(e) => updateNestedSetting('intro', 'content', e.target.value)}
                                    className="w-full px-4 py-2 border rounded h-48 focus:ring-2 focus:ring-brand-blue outline-none leading-relaxed"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <MediaPicker
                                label="Intro Feature Image"
                                value={settings.intro.image}
                                onSelect={(url) => updateNestedSetting('intro', 'image', url)}
                            />

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <h3 className="font-bold text-brand-blue uppercase tracking-widest text-sm mb-4">Course Stats</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Holes</label>
                                        <input
                                            type="text"
                                            value={settings.intro.stats.holes}
                                            onChange={(e) => updateStatSetting('holes', e.target.value)}
                                            className="w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Par</label>
                                        <input
                                            type="text"
                                            value={settings.intro.stats.par}
                                            onChange={(e) => updateStatSetting('par', e.target.value)}
                                            className="w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Distance</label>
                                        <input
                                            type="text"
                                            value={settings.intro.stats.distance}
                                            onChange={(e) => updateStatSetting('distance', e.target.value)}
                                            className="w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Est. Time</label>
                                        <input
                                            type="text"
                                            value={settings.intro.stats.time}
                                            onChange={(e) => updateStatSetting('time', e.target.value)}
                                            className="w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery CTA */}
                <section className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest">Gallery Call to Action</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Kicker</label>
                                <input
                                    type="text"
                                    value={settings.galleryCta.kicker}
                                    onChange={(e) => updateNestedSetting('galleryCta', 'kicker', e.target.value)}
                                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Title (use \n for line breaks)</label>
                                <input
                                    type="text"
                                    value={settings.galleryCta.title}
                                    onChange={(e) => updateNestedSetting('galleryCta', 'title', e.target.value)}
                                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={settings.galleryCta.description}
                                    onChange={(e) => updateNestedSetting('galleryCta', 'description', e.target.value)}
                                    className="w-full px-4 py-2 border rounded h-24 focus:ring-2 focus:ring-brand-blue outline-none"
                                />
                            </div>
                        </div>
                        <MediaPicker
                            label="CTA Background Image"
                            value={settings.galleryCta.image}
                            onSelect={(url) => updateNestedSetting('galleryCta', 'image', url)}
                        />
                    </div>
                </section>

                <div className="flex justify-end pt-6">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className={`px-12 py-4 bg-brand-blue text-white rounded font-montserrat font-bold uppercase tracking-widest shadow-lg transition-all transform hover:-translate-y-1 ${isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-yellow hover:text-brand-blue'}`}
                    >
                        {isSaving ? 'Saving Changes...' : 'Save All Settings'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CourseSettingsAdmin;
