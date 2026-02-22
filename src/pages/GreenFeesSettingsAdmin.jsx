import React, { useEffect, useState } from 'react';
import MediaPicker from '../components/MediaPicker';

const SECTION_CLASS = 'bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100';
const SECTION_HEADER_CLASS = 'mb-6 pb-5 border-b border-gray-100';
const SECTION_TITLE_CLASS = 'text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue';
const SECTION_COPY_CLASS = 'text-sm text-gray-500 font-montserrat mt-2';
const FIELD_LABEL_CLASS = 'block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2';
const INPUT_CLASS = 'w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition';
const SMALL_BUTTON_CLASS = 'px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors';

const GreenFeesSettingsAdmin = () => {
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
            const response = await fetch(`${apiRoot}wingate/v1/green-fees-settings`);
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
            const response = await fetch(`${apiRoot}wingate/v1/green-fees-settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error('Failed to save settings');
            setMessage({ text: 'Green Fees settings saved.', type: 'success' });
        } catch (err) {
            setMessage({ text: 'Error saving settings: ' + err.message, type: 'error' });
        } finally {
            setIsSaving(false);
        }
    };

    const updateNested = (section, field, value) => {
        setSettings((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const updateRow = (section, index, field, value) => {
        setSettings((prev) => {
            const next = [...prev[section]];
            next[index] = { ...next[index], [field]: value };
            return { ...prev, [section]: next };
        });
    };

    const addRow = (section, rowTemplate) => {
        setSettings((prev) => ({ ...prev, [section]: [...prev[section], rowTemplate] }));
    };

    const removeRow = (section, index) => {
        setSettings((prev) => ({ ...prev, [section]: prev[section].filter((_, i) => i !== index) }));
    };

    const etiquetteItemsText = settings?.etiquette?.items?.join('\n') || '';

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
                    Green Fees <span className="text-brand-yellow">Settings</span>
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl">
                    Edit the content used on the Green Fees page, including rates tables, booking contacts, and etiquette details.
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
                        <h2 className={SECTION_TITLE_CLASS}>Hero</h2>
                        <p className={SECTION_COPY_CLASS}>Top banner copy and background image.</p>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
                        <div className="space-y-4">
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Kicker</label>
                                <input className={INPUT_CLASS} type="text" value={settings.hero.kicker} onChange={(e) => updateNested('hero', 'kicker', e.target.value)} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Title</label>
                                    <input className={INPUT_CLASS} type="text" value={settings.hero.title} onChange={(e) => updateNested('hero', 'title', e.target.value)} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Title Highlight</label>
                                    <input className={INPUT_CLASS} type="text" value={settings.hero.titleHighlight} onChange={(e) => updateNested('hero', 'titleHighlight', e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Subtitle</label>
                                <input className={INPUT_CLASS} type="text" value={settings.hero.subtitle} onChange={(e) => updateNested('hero', 'subtitle', e.target.value)} />
                            </div>
                        </div>
                        <MediaPicker label="Hero Background Image" value={settings.hero.backgroundImage} onSelect={(url) => updateNested('hero', 'backgroundImage', url)} />
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Intro</h2>
                        <p className={SECTION_COPY_CLASS}>Short intro paragraph below hero.</p>
                    </div>
                    <label className={FIELD_LABEL_CLASS}>Intro Content</label>
                    <textarea
                        className={`${INPUT_CLASS} min-h-[140px]`}
                        value={settings.intro.content}
                        onChange={(e) => updateNested('intro', 'content', e.target.value)}
                    />
                </section>

                <section className={SECTION_CLASS}>
                    <div className={`${SECTION_HEADER_CLASS} flex items-center justify-between gap-4`}>
                        <div>
                            <h2 className={SECTION_TITLE_CLASS}>Green Fees Table</h2>
                            <p className={SECTION_COPY_CLASS}>Rows for green fee categories and prices.</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => addRow('greenFees', { category: 'New Category', holes18: 0, holes9: 0 })}
                            className={`${SMALL_BUTTON_CLASS} bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue`}
                        >
                            Add Row
                        </button>
                    </div>
                    <div className="space-y-3">
                        {settings.greenFees.map((row, index) => (
                            <div key={`gf-${index}`} className="grid grid-cols-1 md:grid-cols-[1fr_140px_140px_auto] gap-3 items-end p-3 rounded-xl bg-gray-50 border border-gray-200">
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Category</label>
                                    <input className={INPUT_CLASS} type="text" value={row.category} onChange={(e) => updateRow('greenFees', index, 'category', e.target.value)} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>18 Holes</label>
                                    <input className={INPUT_CLASS} type="number" value={row.holes18} onChange={(e) => updateRow('greenFees', index, 'holes18', Number(e.target.value))} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>9 Holes</label>
                                    <input className={INPUT_CLASS} type="number" value={row.holes9} onChange={(e) => updateRow('greenFees', index, 'holes9', Number(e.target.value))} />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeRow('greenFees', index)}
                                    className={`${SMALL_BUTTON_CLASS} bg-white border border-red-200 text-red-600 hover:bg-red-50`}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={`${SECTION_HEADER_CLASS} flex items-center justify-between gap-4`}>
                        <div>
                            <h2 className={SECTION_TITLE_CLASS}>Cart Hire Table</h2>
                            <p className={SECTION_COPY_CLASS}>Rows for cart types and prices.</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => addRow('cartHire', { type: 'New Cart', holes18: 0, holes9: 0 })}
                            className={`${SMALL_BUTTON_CLASS} bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue`}
                        >
                            Add Row
                        </button>
                    </div>
                    <div className="space-y-3">
                        {settings.cartHire.map((row, index) => (
                            <div key={`cart-${index}`} className="grid grid-cols-1 md:grid-cols-[1fr_140px_140px_auto] gap-3 items-end p-3 rounded-xl bg-gray-50 border border-gray-200">
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Type</label>
                                    <input className={INPUT_CLASS} type="text" value={row.type} onChange={(e) => updateRow('cartHire', index, 'type', e.target.value)} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>18 Holes</label>
                                    <input className={INPUT_CLASS} type="number" value={row.holes18} onChange={(e) => updateRow('cartHire', index, 'holes18', Number(e.target.value))} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>9 Holes</label>
                                    <input className={INPUT_CLASS} type="number" value={row.holes9} onChange={(e) => updateRow('cartHire', index, 'holes9', Number(e.target.value))} />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeRow('cartHire', index)}
                                    className={`${SMALL_BUTTON_CLASS} bg-white border border-red-200 text-red-600 hover:bg-red-50`}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Booking Panel</h2>
                        <p className={SECTION_COPY_CLASS}>Contact card shown next to the rates tables.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Panel Title</label>
                            <input className={INPUT_CLASS} type="text" value={settings.booking.title} onChange={(e) => updateNested('booking', 'title', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Phone</label>
                            <input className={INPUT_CLASS} type="text" value={settings.booking.phone} onChange={(e) => updateNested('booking', 'phone', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Email</label>
                            <input className={INPUT_CLASS} type="text" value={settings.booking.email} onChange={(e) => updateNested('booking', 'email', e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                            <label className={FIELD_LABEL_CLASS}>Description</label>
                            <textarea className={`${INPUT_CLASS} min-h-[100px]`} value={settings.booking.description} onChange={(e) => updateNested('booking', 'description', e.target.value)} />
                        </div>
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Etiquette Section</h2>
                        <p className={SECTION_COPY_CLASS}>Image, copy, checklist, and CTA button.</p>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
                        <div className="space-y-4">
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Title</label>
                                <input className={INPUT_CLASS} type="text" value={settings.etiquette.title} onChange={(e) => updateNested('etiquette', 'title', e.target.value)} />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Description</label>
                                <textarea className={`${INPUT_CLASS} min-h-[100px]`} value={settings.etiquette.description} onChange={(e) => updateNested('etiquette', 'description', e.target.value)} />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Checklist Items (One per line)</label>
                                <textarea
                                    className={`${INPUT_CLASS} min-h-[160px]`}
                                    value={etiquetteItemsText}
                                    onChange={(e) => updateNested('etiquette', 'items', e.target.value.split('\n').map((item) => item.trim()).filter(Boolean))}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Button Text</label>
                                    <input className={INPUT_CLASS} type="text" value={settings.etiquette.buttonText} onChange={(e) => updateNested('etiquette', 'buttonText', e.target.value)} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Button URL</label>
                                    <input className={INPUT_CLASS} type="text" value={settings.etiquette.buttonUrl} onChange={(e) => updateNested('etiquette', 'buttonUrl', e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <MediaPicker label="Etiquette Image" value={settings.etiquette.image} onSelect={(url) => updateNested('etiquette', 'image', url)} />
                    </div>
                </section>

                <div className="sticky bottom-3 z-30">
                    <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4">
                        <p className="text-xs md:text-sm text-gray-500 m-0">
                            Save after editing the Green Fees content.
                        </p>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className={`px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${isSaving
                                ? 'bg-brand-blue text-white opacity-50 cursor-not-allowed'
                                : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue'
                                }`}
                        >
                            {isSaving ? 'Saving Changes...' : 'Save Green Fees Settings'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default GreenFeesSettingsAdmin;
