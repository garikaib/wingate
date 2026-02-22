import React, { useEffect, useState } from 'react';
import MediaPicker from '../components/MediaPicker';

const SECTION_CLASS = 'bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100';
const SECTION_HEADER_CLASS = 'mb-6 pb-5 border-b border-gray-100';
const SECTION_TITLE_CLASS = 'text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue';
const SECTION_COPY_CLASS = 'text-sm text-gray-500 font-montserrat mt-2';
const FIELD_LABEL_CLASS = 'block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2';
const INPUT_CLASS = 'w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition';

const HomeSettingsAdmin = () => {
    const [settings, setSettings] = useState(null);
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
            const response = await fetch(`${apiRoot}wingate/v1/home-settings`);
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
            const response = await fetch(`${apiRoot}wingate/v1/home-settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error('Failed to save settings');
            setMessage({ text: 'Settings saved successfully.', type: 'success' });
        } catch (err) {
            setMessage({ text: 'Error saving settings: ' + err.message, type: 'error' });
        } finally {
            setIsSaving(false);
        }
    };

    const updateNestedSetting = (section, field, value) => {
        setSettings((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const updateCardSetting = (index, field, value) => {
        setSettings((prev) => {
            const nextCards = [...prev.cards];
            nextCards[index] = { ...nextCards[index], [field]: value };
            return { ...prev, cards: nextCards };
        });
    };

    if (isLoading) {
        return (
            <div className="p-8">
                <p className="animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm">
                    Loading settings...
                </p>
            </div>
        );
    }

    return (
        <div className="wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue">
            <header className="mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
                    Wingate Admin
                </div>
                <h1 className="text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3">
                    Home Page <span className="text-brand-yellow">Settings</span>
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl">
                    Manage homepage content, copy, and media in one place. Structure has been simplified so each section is easier to edit.
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

            <form onSubmit={handleSave} className="space-y-8 md:space-y-10">
                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Hero Section</h2>
                        <p className={SECTION_COPY_CLASS}>Main hero copy and top background image.</p>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
                        <div className="space-y-5">
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Kicker</label>
                                <input
                                    type="text"
                                    value={settings.hero.kicker}
                                    onChange={(e) => updateNestedSetting('hero', 'kicker', e.target.value)}
                                    className={INPUT_CLASS}
                                />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Main Title</label>
                                <input
                                    type="text"
                                    value={settings.hero.title}
                                    onChange={(e) => updateNestedSetting('hero', 'title', e.target.value)}
                                    className={INPUT_CLASS}
                                />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Subtitle</label>
                                <input
                                    type="text"
                                    value={settings.hero.subtitle}
                                    onChange={(e) => updateNestedSetting('hero', 'subtitle', e.target.value)}
                                    className={INPUT_CLASS}
                                />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Description</label>
                                <textarea
                                    value={settings.hero.description}
                                    onChange={(e) => updateNestedSetting('hero', 'description', e.target.value)}
                                    className={`${INPUT_CLASS} min-h-[128px]`}
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

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Info Cards</h2>
                        <p className={SECTION_COPY_CLASS}>Three homepage cards with their own content and background image.</p>
                    </div>
                    <div className="space-y-6">
                        {settings.cards.map((card, index) => (
                            <article key={index} className="bg-gray-50/70 border border-gray-200 rounded-3xl p-5 md:p-6">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="text-lg md:text-xl font-cinzel font-bold uppercase text-brand-blue">
                                        Card {index + 1}
                                    </h3>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                                        Homepage Tile
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className={FIELD_LABEL_CLASS}>Title</label>
                                            <input
                                                type="text"
                                                value={card.title}
                                                onChange={(e) => updateCardSetting(index, 'title', e.target.value)}
                                                className={INPUT_CLASS}
                                            />
                                        </div>
                                        <div>
                                            <label className={FIELD_LABEL_CLASS}>Subtitle / Kicker</label>
                                            <input
                                                type="text"
                                                value={card.subtitle}
                                                onChange={(e) => updateCardSetting(index, 'subtitle', e.target.value)}
                                                className={INPUT_CLASS}
                                            />
                                        </div>
                                        <div>
                                            <label className={FIELD_LABEL_CLASS}>Link URL</label>
                                            <input
                                                type="text"
                                                value={card.url}
                                                onChange={(e) => updateCardSetting(index, 'url', e.target.value)}
                                                className={INPUT_CLASS}
                                            />
                                        </div>
                                    </div>
                                    <MediaPicker
                                        label="Card Background Image"
                                        value={card.image}
                                        onSelect={(url) => updateCardSetting(index, 'image', url)}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Welcome Section</h2>
                        <p className={SECTION_COPY_CLASS}>Intro copy block and supporting image below hero/cards.</p>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
                        <div className="space-y-5">
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Title</label>
                                <input
                                    type="text"
                                    value={settings.welcome.title}
                                    onChange={(e) => updateNestedSetting('welcome', 'title', e.target.value)}
                                    className={INPUT_CLASS}
                                />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Content Text</label>
                                <textarea
                                    value={settings.welcome.content}
                                    onChange={(e) => updateNestedSetting('welcome', 'content', e.target.value)}
                                    className={`${INPUT_CLASS} min-h-[280px]`}
                                />
                            </div>
                        </div>
                        <MediaPicker
                            label="Feature Image"
                            value={settings.welcome.image}
                            onSelect={(url) => updateNestedSetting('welcome', 'image', url)}
                        />
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Gallery Peek</h2>
                        <p className={SECTION_COPY_CLASS}>Parallax strip image used for the gallery transition block.</p>
                    </div>
                    <MediaPicker
                        label="Full-Width Parallax Image"
                        value={settings.peekWindow.image}
                        onSelect={(url) => updateNestedSetting('peekWindow', 'image', url)}
                    />
                </section>

                <div className="sticky bottom-3 z-30">
                    <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4">
                        <p className="text-xs md:text-sm text-gray-500 m-0">
                            Save when you finish editing this page.
                        </p>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className={`px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${isSaving
                                ? 'bg-brand-blue text-white opacity-50 cursor-not-allowed'
                                : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue'
                                }`}
                        >
                            {isSaving ? 'Saving Changes...' : 'Save All Settings'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HomeSettingsAdmin;
