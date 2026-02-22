import React, { useState, useEffect } from 'react';
import MediaPicker from '../components/MediaPicker';

const MembershipAdmin = () => {
    const [settings, setSettings] = useState({
        hero: { title: '', subtitle: '', backgroundImage: '' },
        tiersIntro: { kicker: '', title: '' },
        tiers: [],
        cta: { title: '', description: '', buttonText: '', buttonUrl: '' }
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const apiRoot = window.wingateAdminData?.root || '/wp-json/';
    const nonce = window.wingateAdminData?.nonce || '';

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${apiRoot}wingate/v1/membership-settings`);
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
            const response = await fetch(`${apiRoot}wingate/v1/membership-settings`, {
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

    const updateTier = (index, field, value) => {
        setSettings(prev => {
            const newTiers = [...prev.tiers];
            newTiers[index] = { ...newTiers[index], [field]: value };
            return { ...prev, tiers: newTiers };
        });
    };

    const addTier = () => {
        setSettings(prev => ({
            ...prev,
            tiers: [...prev.tiers, { name: 'New Tier', price: '$0/yr', features: 'Feature 1, Feature 2' }]
        }));
    };

    const removeTier = (index) => {
        setSettings(prev => {
            const newTiers = [...prev.tiers];
            newTiers.splice(index, 1);
            return { ...prev, tiers: newTiers };
        });
    };

    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Loading Membership settings...</div>;
    }

    return (
        <div className="wingate-admin-spa max-w-6xl mx-auto p-6 font-montserrat">
            <header className="flex justify-between items-center mb-8 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-cinzel font-bold text-brand-blue mb-1">
                        Membership <span className="text-brand-yellow">Settings</span>
                    </h1>
                    <p className="text-gray-500 text-sm">Manage the hero section, membership tiers, and call to action.</p>
                </div>
                <div className="flex items-center gap-4">
                    {message.text && (
                        <span className={`px-4 py-2 rounded-md text-sm font-bold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {message.text}
                        </span>
                    )}
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-2 px-6 rounded transition-colors"
                    >
                        {isSaving ? 'Saving...' : 'Save All Settings'}
                    </button>
                </div>
            </header>

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
                                <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                                <textarea value={settings.hero.title} onChange={e => updateNestedSetting('hero', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" rows="2" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Subtitle</label>
                                <textarea value={settings.hero.subtitle} onChange={e => updateNestedSetting('hero', 'subtitle', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" rows="3" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Background Image</label>
                            <MediaPicker value={settings.hero.backgroundImage} onSelect={(url) => updateNestedSetting('hero', 'backgroundImage', url)} />
                        </div>
                    </div>
                </section>

                {/* Tiers Intro Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">2</span>
                        Tiers Intro
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Kicker</label>
                            <input type="text" value={settings.tiersIntro.kicker} onChange={e => updateNestedSetting('tiersIntro', 'kicker', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                            <input type="text" value={settings.tiersIntro.title} onChange={e => updateNestedSetting('tiersIntro', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                    </div>
                </section>

                {/* Tiers Editor Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-cinzel text-brand-blue font-bold mb-6 flex items-center gap-2 border-b pb-4">
                        <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">3</span>
                        Membership Tiers
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {settings.tiers.map((tier, index) => (
                            <div key={index} className="bg-brand-gray/30 p-5 rounded-lg border border-gray-200 relative group">
                                <button
                                    onClick={() => removeTier(index)}
                                    className="absolute top-2 right-2 text-red-400 hover:text-red-600 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                                    title="Remove Tier"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Tier Name</label>
                                        <input type="text" value={tier.name} onChange={e => updateTier(index, 'name', e.target.value)} className="w-full border-gray-300 rounded shadow-sm text-sm font-cinzel font-bold text-brand-blue" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Price</label>
                                        <input type="text" value={tier.price} onChange={e => updateTier(index, 'price', e.target.value)} className="w-full border-gray-300 rounded shadow-sm text-sm text-brand-yellow font-bold" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Features (comma separated)</label>
                                        <textarea value={tier.features} onChange={e => updateTier(index, 'features', e.target.value)} className="w-full border-gray-300 rounded shadow-sm text-sm" rows="3" placeholder="Unlimited Golf, Club Storage, etc." />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-colors cursor-pointer" onClick={addTier}>
                            <div className="text-center text-brand-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <span className="font-cinzel font-bold">Add New Tier</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">4</span>
                        Call To Action (Manual Forms)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                                <input type="text" value={settings.cta.title} onChange={e => updateNestedSetting('cta', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                                <textarea value={settings.cta.description} onChange={e => updateNestedSetting('cta', 'description', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" rows="2" />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Button Text</label>
                                    <input type="text" value={settings.cta.buttonText} onChange={e => updateNestedSetting('cta', 'buttonText', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Button URL</label>
                                    <input type="text" value={settings.cta.buttonUrl} onChange={e => updateNestedSetting('cta', 'buttonUrl', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default MembershipAdmin;
