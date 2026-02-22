import React, { useEffect, useState } from 'react';

const layouts = [
    {
        key: 'current',
        name: 'Current Premium',
        subtitle: 'Existing Wingate editorial composition',
    },
    {
        key: 'classic-a',
        name: 'Classic A',
        subtitle: 'Hero lead + elegant stacked editorial cards',
    },
    {
        key: 'classic-b',
        name: 'Classic B',
        subtitle: 'Alternating magazine strips with strong visuals',
    },
    {
        key: 'modern-a',
        name: 'Modern A',
        subtitle: 'Asymmetric lead + dynamic card grid',
    },
    {
        key: 'modern-e',
        name: 'Modern E',
        subtitle: 'Sleek premium grid with dense metadata',
    },
    {
        key: 'slider-a',
        name: 'Slider A',
        subtitle: 'Horizontal featured rail + supporting headlines',
    },
];

const NewsLayoutSettingsAdmin = () => {
    const [settings, setSettings] = useState({ layout: 'current' });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const apiRoot = window.wingateAdminData?.root || '/wp-json/';
    const nonce = window.wingateAdminData?.nonce || '';

    useEffect(() => {
        const fetchSettings = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${apiRoot}wingate/v1/news-layout-settings`);
                if (!response.ok) throw new Error('Failed to fetch news layout settings');
                const data = await response.json();
                setSettings(data);
            } catch (err) {
                setMessage({ text: 'Error loading settings: ' + err.message, type: 'error' });
            } finally {
                setIsLoading(false);
            }
        };

        fetchSettings();
    }, [apiRoot]);

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage({ text: '', type: '' });

        try {
            const response = await fetch(`${apiRoot}wingate/v1/news-layout-settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error('Failed to save layout settings');
            setMessage({ text: 'News layout updated successfully.', type: 'success' });
        } catch (err) {
            setMessage({ text: 'Error saving settings: ' + err.message, type: 'error' });
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="p-8">
                <p className="animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm">
                    Loading layout settings...
                </p>
            </div>
        );
    }

    return (
        <div className="wingate-admin-spa max-w-6xl mx-auto p-4 md:p-8 text-brand-blue">
            <header className="mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
                    Wingate Admin
                </div>
                <h1 className="text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3">
                    News <span className="text-brand-yellow">Layout</span>
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl">
                    Choose which premium news layout to display at <span className="font-semibold">/news/</span>. Each layout keeps Wingate typography, colors, and tone.
                </p>
            </header>

            {message.text && (
                <div
                    className={`mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${message.type === 'error'
                        ? 'bg-red-50 border-red-200 text-red-700'
                        : 'bg-green-50 border-green-200 text-green-700'
                        }`}
                >
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSave} className="space-y-8">
                <section className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100">
                    <div className="mb-6 pb-5 border-b border-gray-100">
                        <h2 className="text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue">
                            Select Layout
                        </h2>
                        <p className="text-sm text-gray-500 font-montserrat mt-2">
                            Inspired by the reference set, tuned with Wingate brand styling and premium editorial feel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {layouts.map((layout) => {
                            const isActive = settings.layout === layout.key;
                            return (
                                <label
                                    key={layout.key}
                                    className={`cursor-pointer rounded-2xl border p-4 transition-all ${isActive
                                        ? 'border-brand-blue bg-brand-blue text-white shadow-xl'
                                        : 'border-gray-200 bg-gray-50/60 hover:border-brand-yellow/60 hover:bg-white'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="layout"
                                        value={layout.key}
                                        checked={isActive}
                                        onChange={(e) => setSettings((prev) => ({ ...prev, layout: e.target.value }))}
                                        className="sr-only"
                                    />
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className={`font-cinzel text-lg font-bold ${isActive ? '!text-white' : 'text-brand-blue'}`}>
                                            {layout.name}
                                        </h3>
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isActive ? 'text-brand-yellow' : 'text-gray-400'}`}>
                                            {isActive ? 'Active' : 'Option'}
                                        </span>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${isActive ? 'text-white/85' : 'text-gray-600'}`}>
                                        {layout.subtitle}
                                    </p>
                                </label>
                            );
                        })}
                    </div>
                </section>

                <div className="sticky bottom-3 z-30">
                    <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4">
                        <p className="text-xs md:text-sm text-gray-500 m-0">
                            Save to apply this layout on the News page.
                        </p>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className={`px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${isSaving
                                ? 'bg-brand-blue text-white opacity-50 cursor-not-allowed'
                                : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue'
                                }`}
                        >
                            {isSaving ? 'Saving...' : 'Save News Layout'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewsLayoutSettingsAdmin;
