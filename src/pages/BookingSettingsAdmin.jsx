import React, { useEffect, useState } from 'react';
import MediaPicker from '../components/MediaPicker';

const SECTION_CLASS = 'bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100';
const SECTION_HEADER_CLASS = 'mb-6 pb-5 border-b border-gray-100';
const SECTION_TITLE_CLASS = 'text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue';
const SECTION_COPY_CLASS = 'text-sm text-gray-500 font-montserrat mt-2';
const FIELD_LABEL_CLASS = 'block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2';
const INPUT_CLASS = 'w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition';
const SMALL_BUTTON_CLASS = 'px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors';

const BookingSettingsAdmin = () => {
    const [settings, setSettings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const apiRoot = window.wingateAdminData?.root || '/wp-json/';
    const nonce = window.wingateAdminData?.nonce || '';

    useEffect(() => {
        const fetchSettings = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${apiRoot}wingate/v1/booking-settings`);
                if (!response.ok) throw new Error('Failed to fetch booking settings');
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
            const response = await fetch(`${apiRoot}wingate/v1/booking-settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(settings),
            });
            if (!response.ok) throw new Error('Failed to save booking settings');
            setMessage({ text: 'Booking settings saved.', type: 'success' });
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

    const updateQuickInfo = (index, field, value) => {
        setSettings((prev) => {
            const next = [...prev.quickInfo];
            next[index] = { ...next[index], [field]: value };
            return { ...prev, quickInfo: next };
        });
    };

    const dressItemsText = settings?.dressCode?.items?.join('\n') || '';

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
                    Booking <span className="text-brand-yellow">Settings</span>
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl">
                    Edit booking page content sections. The booking iframe embed is intentionally fixed and cannot be changed here.
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
                        <p className={SECTION_COPY_CLASS}>Top headline and hero image.</p>
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
                        <h2 className={SECTION_TITLE_CLASS}>Quick Info Cards</h2>
                        <p className={SECTION_COPY_CLASS}>Edit card labels and values shown above the iframe.</p>
                    </div>
                    <div className="space-y-4">
                        {settings.quickInfo.map((card, index) => (
                            <div key={`quick-${index}`} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Label</label>
                                    <input className={INPUT_CLASS} type="text" value={card.label || ''} onChange={(e) => updateQuickInfo(index, 'label', e.target.value)} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>Value</label>
                                    <input className={INPUT_CLASS} type="text" value={card.value || ''} onChange={(e) => updateQuickInfo(index, 'value', e.target.value)} />
                                </div>
                                <div>
                                    <label className={FIELD_LABEL_CLASS}>URL (Optional)</label>
                                    <input className={INPUT_CLASS} type="text" value={card.url || ''} onChange={(e) => updateQuickInfo(index, 'url', e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Dress Code</h2>
                        <p className={SECTION_COPY_CLASS}>Title, badge letter, and checklist items.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Title</label>
                                <input className={INPUT_CLASS} type="text" value={settings.dressCode.title} onChange={(e) => updateNested('dressCode', 'title', e.target.value)} />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Badge Letter</label>
                                <input className={INPUT_CLASS} type="text" maxLength={2} value={settings.dressCode.badge} onChange={(e) => updateNested('dressCode', 'badge', e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Items (One per line)</label>
                            <textarea
                                className={`${INPUT_CLASS} min-h-[140px]`}
                                value={dressItemsText}
                                onChange={(e) =>
                                    updateNested(
                                        'dressCode',
                                        'items',
                                        e.target.value
                                            .split('\n')
                                            .map((item) => item.trim())
                                            .filter(Boolean)
                                    )
                                }
                            />
                        </div>
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Cart Hire Panel</h2>
                        <p className={SECTION_COPY_CLASS}>Edit heading, description, and price summary block.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Title</label>
                                <input className={INPUT_CLASS} type="text" value={settings.cartHire.title} onChange={(e) => updateNested('cartHire', 'title', e.target.value)} />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Badge Letter</label>
                                <input className={INPUT_CLASS} type="text" maxLength={2} value={settings.cartHire.badge} onChange={(e) => updateNested('cartHire', 'badge', e.target.value)} />
                            </div>
                            <div>
                                <label className={FIELD_LABEL_CLASS}>Rate Label</label>
                                <input className={INPUT_CLASS} type="text" value={settings.cartHire.label} onChange={(e) => updateNested('cartHire', 'label', e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Description</label>
                            <textarea className={`${INPUT_CLASS} min-h-[100px]`} value={settings.cartHire.description} onChange={(e) => updateNested('cartHire', 'description', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Rates Text</label>
                            <input className={INPUT_CLASS} type="text" value={settings.cartHire.ratesText} onChange={(e) => updateNested('cartHire', 'ratesText', e.target.value)} />
                        </div>
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Bottom CTA</h2>
                        <p className={SECTION_COPY_CLASS}>Button text and destination shown at the bottom of the page.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Button Text</label>
                            <input className={INPUT_CLASS} type="text" value={settings.cta.text} onChange={(e) => updateNested('cta', 'text', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Button URL</label>
                            <input className={INPUT_CLASS} type="text" value={settings.cta.url} onChange={(e) => updateNested('cta', 'url', e.target.value)} />
                        </div>
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Iframe</h2>
                        <p className={SECTION_COPY_CLASS}>This is intentionally locked and unchanged.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600">
                        Booking iframe URL is fixed in template and not editable by design.
                    </div>
                </section>

                <div className="sticky bottom-3 z-30">
                    <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4">
                        <p className="text-xs md:text-sm text-gray-500 m-0">
                            Save after editing Booking content.
                        </p>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className={`px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${isSaving
                                ? 'bg-brand-blue text-white opacity-50 cursor-not-allowed'
                                : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue'
                                }`}
                        >
                            {isSaving ? 'Saving Changes...' : 'Save Booking Settings'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingSettingsAdmin;
