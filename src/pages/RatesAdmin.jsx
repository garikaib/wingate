import React, { useState, useEffect } from 'react';
import MediaPicker from '../components/MediaPicker';

const RatesAdmin = () => {
    const [settings, setSettings] = useState({
        hero: { kicker: '', title: '', subtitle: '', backgroundImage: '' },
        intro: { kicker: '', title: '', content: '' },
        menRates: [],
        ladiesRates: [],
        allRates: [],
        cta: { title: '', description: '', buttonText: '', buttonUrl: '', backgroundImage: '' }
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [activeTab, setActiveTab] = useState('men'); // 'men', 'ladies', 'extras'

    const apiRoot = window.wingateAdminData?.root || '/wp-json/';
    const nonce = window.wingateAdminData?.nonce || '';

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${apiRoot}wingate/v1/rates-settings`);
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
            const response = await fetch(`${apiRoot}wingate/v1/rates-settings`, {
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

    const updateRateRow = (arrayName, index, field, value) => {
        setSettings(prev => {
            const newArray = [...prev[arrayName]];
            newArray[index] = { ...newArray[index], [field]: value };
            return { ...prev, [arrayName]: newArray };
        });
    };

    const addRateRow = (arrayName) => {
        setSettings(prev => ({
            ...prev,
            [arrayName]: [...prev[arrayName], { category: '', desc: '', quarterly: '', monthly: '', annual: '', flat: '' }]
        }));
    };

    const removeRateRow = (arrayName, index) => {
        setSettings(prev => {
            const newArray = [...prev[arrayName]];
            newArray.splice(index, 1);
            return { ...prev, [arrayName]: newArray };
        });
    };

    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Loading Rates settings...</div>;
    }

    const renderRateTable = (arrayName, columns) => (
        <div className="bg-brand-gray/30 p-6 rounded-xl border border-gray-100 overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
                <thead>
                    <tr className="text-xs font-bold text-gray-500 uppercase tracking-wider border-b">
                        <th className="pb-2 w-1/5">Category</th>
                        <th className="pb-2 w-1/4">Description</th>
                        {columns.includes('quarterly') && <th className="pb-2 w-24">Quarterly ($)</th>}
                        {columns.includes('monthly') && <th className="pb-2 w-24">Monthly ($)</th>}
                        {columns.includes('annual') && <th className="pb-2 w-24">Annual ($)</th>}
                        {columns.includes('flat') && <th className="pb-2 w-24">Flat Fee ($)</th>}
                        <th className="pb-2 w-16 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {settings[arrayName].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="py-2 pr-2">
                                <input type="text" value={row.category} onChange={e => updateRateRow(arrayName, idx, 'category', e.target.value)} className="w-full text-sm border-gray-300 rounded shadow-sm" placeholder="e.g. MALE" />
                            </td>
                            <td className="py-2 pr-2">
                                <input type="text" value={row.desc} onChange={e => updateRateRow(arrayName, idx, 'desc', e.target.value)} className="w-full text-sm border-gray-300 rounded shadow-sm" placeholder="Description" />
                            </td>
                            {columns.includes('quarterly') && (
                                <td className="py-2 pr-2">
                                    <input type="text" value={row.quarterly} onChange={e => updateRateRow(arrayName, idx, 'quarterly', e.target.value)} className="w-full text-sm border-gray-300 rounded shadow-sm" />
                                </td>
                            )}
                            {columns.includes('monthly') && (
                                <td className="py-2 pr-2">
                                    <input type="text" value={row.monthly} onChange={e => updateRateRow(arrayName, idx, 'monthly', e.target.value)} className="w-full text-sm border-gray-300 rounded shadow-sm" />
                                </td>
                            )}
                            {columns.includes('annual') && (
                                <td className="py-2 pr-2">
                                    <input type="text" value={row.annual} onChange={e => updateRateRow(arrayName, idx, 'annual', e.target.value)} className="w-full text-sm border-gray-300 rounded shadow-sm" />
                                </td>
                            )}
                            {columns.includes('flat') && (
                                <td className="py-2 pr-2">
                                    <input type="text" value={row.flat} onChange={e => updateRateRow(arrayName, idx, 'flat', e.target.value)} className="w-full text-sm border-gray-300 rounded shadow-sm" />
                                </td>
                            )}
                            <td className="py-2 text-center">
                                <button onClick={() => removeRateRow(arrayName, idx)} className="text-red-500 hover:text-red-700 p-1 bg-red-50 rounded" title="Remove Row">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={() => addRateRow(arrayName)}
                className="mt-4 flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-yellow font-cinzel"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                Add Row
            </button>
        </div>
    );

    return (
        <div className="wingate-admin-spa max-w-6xl mx-auto p-6 font-montserrat">
            <header className="flex justify-between items-center mb-8 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-cinzel font-bold text-brand-blue mb-1">
                        Rates & Subs <span className="text-brand-yellow">Settings</span>
                    </h1>
                    <p className="text-gray-500 text-sm">Manage the visual content and pricing tables for the Rates page.</p>
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
                                <label className="block text-sm font-bold text-gray-700 mb-1">Kicker</label>
                                <input type="text" value={settings.hero.kicker} onChange={e => updateNestedSetting('hero', 'kicker', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                                <textarea value={settings.hero.title} onChange={e => updateNestedSetting('hero', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" rows="2" />
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
                            <label className="block text-sm font-bold text-gray-700 mb-1">Kicker</label>
                            <input type="text" value={settings.intro.kicker} onChange={e => updateNestedSetting('intro', 'kicker', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                            <textarea value={settings.intro.title} onChange={e => updateNestedSetting('intro', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" rows="2" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Content</label>
                            <textarea value={settings.intro.content} onChange={e => updateNestedSetting('intro', 'content', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" rows="3" />
                        </div>
                    </div>
                </section>

                {/* Rates Tables Sections */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-cinzel text-brand-blue font-bold mb-6 flex items-center gap-2 border-b pb-4">
                        <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">3</span>
                        Rates Tables Editor
                    </h2>

                    {/* Tabs */}
                    <div className="flex border-b mb-6">
                        <button
                            className={`px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${activeTab === 'men' ? 'border-b-2 border-brand-yellow text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                            onClick={() => setActiveTab('men')}
                        >
                            Gentlemen
                        </button>
                        <button
                            className={`px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${activeTab === 'ladies' ? 'border-b-2 border-brand-yellow text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                            onClick={() => setActiveTab('ladies')}
                        >
                            Ladies
                        </button>
                        <button
                            className={`px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${activeTab === 'extras' ? 'border-b-2 border-brand-yellow text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
                            onClick={() => setActiveTab('extras')}
                        >
                            Admin & Extras
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div>
                        {activeTab === 'men' && (
                            <div>
                                <p className="text-sm text-gray-500 mb-4">Edit the Gentlemen rates table. Leave fields like "Annual" blank if they are Quarterly/Monthly subscriptions.</p>
                                {renderRateTable('menRates', ['quarterly', 'monthly', 'annual'])}
                            </div>
                        )}
                        {activeTab === 'ladies' && (
                            <div>
                                <p className="text-sm text-gray-500 mb-4">Edit the Ladies rates table. Leave fields like "Annual" blank if they are Quarterly/Monthly subscriptions.</p>
                                {renderRateTable('ladiesRates', ['quarterly', 'monthly', 'annual'])}
                            </div>
                        )}
                        {activeTab === 'extras' && (
                            <div>
                                <p className="text-sm text-gray-500 mb-4">Edit the Admin & Extras rates table. These are usually flat fees.</p>
                                {renderRateTable('allRates', ['flat'])}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm">4</span>
                        Call To Action
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                                <textarea value={settings.cta.title} onChange={e => updateNestedSetting('cta', 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm" rows="2" />
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
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Background Image</label>
                            <MediaPicker value={settings.cta.backgroundImage} onSelect={(url) => updateNestedSetting('cta', 'backgroundImage', url)} />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default RatesAdmin;
