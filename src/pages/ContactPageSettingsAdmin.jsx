import React, { useEffect, useState } from 'react';
import MediaPicker from '../components/MediaPicker';

const SECTION_CLASS = 'bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100';
const SECTION_HEADER_CLASS = 'mb-6 pb-5 border-b border-gray-100';
const SECTION_TITLE_CLASS = 'text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue';
const SECTION_COPY_CLASS = 'text-sm text-gray-500 font-montserrat mt-2';
const FIELD_LABEL_CLASS = 'block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2';
const INPUT_CLASS = 'w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition';

const phoneHrefFromLabel = (phoneLabel, phoneType = 'tel') => {
    const digits = String(phoneLabel || '').replace(/[^\d+]/g, '');

    if (phoneType === 'whatsapp') {
        const whatsappNumber = digits.startsWith('+')
            ? digits.slice(1).replace(/\D/g, '')
            : digits.startsWith('0')
                ? `263${digits.slice(1).replace(/\D/g, '')}`
                : digits.replace(/\D/g, '');

        return whatsappNumber ? `https://wa.me/${whatsappNumber}` : '';
    }

    return digits ? `tel:${digits}` : 'tel:';
};

const defaultSettings = {
    hero: {
        title: 'CONTACT US',
        backgroundImage: '/wp-content/uploads/2026/01/605410094_1291221263032055_7504380241267586286_n-scaled.jpg',
    },
    club: {
        title: 'Wingate Park Golf Club',
    },
    cards: {
        findUsTitle: 'Find Us',
        emailTitle: 'Email Us',
        phoneTitle: 'Call Us',
        socialTitle: 'Follow Us',
    },
    location: {
        mapUrl: 'https://maps.google.com/?q=Wingate+Park+Golf+Club',
        lineOne: 'Alpes Road',
        lineTwo: 'Harare, Zimbabwe',
        mapSectionTitle: 'Find Us',
        mapEmbedUrl: 'https://maps.google.com/maps?q=Wingate%20Park%20Golf%20Club%2C%20Harare&z=14&output=embed',
    },
    teamSection: {
        title: 'Contact Team',
    },
    team: [
        {
            name: 'Daryl Catterall',
            title: 'Club Manager',
            phoneLabel: '0714681041',
            phoneHref: 'tel:0714681041',
            phoneType: 'tel',
            email: 'daryl@wingate.co.zw',
        },
        {
            name: 'D Kasiyandima',
            title: 'Office Assistant Manager',
            phoneLabel: '0719339670',
            phoneHref: 'tel:0719339670',
            phoneType: 'tel',
            email: 'functions@wingate.co.zw',
        },
        {
            name: 'T Musiyakuvi',
            title: 'Office Assistant Manager',
            phoneLabel: '0772339670',
            phoneHref: 'tel:0772339670',
            phoneType: 'tel',
            email: 'reception@wingate.co.zw',
        },
    ],
};

const mergeSettings = (incoming) => ({
    ...defaultSettings,
    ...incoming,
    hero: { ...defaultSettings.hero, ...(incoming?.hero || {}) },
    club: { ...defaultSettings.club, ...(incoming?.club || {}) },
    cards: { ...defaultSettings.cards, ...(incoming?.cards || {}) },
    location: { ...defaultSettings.location, ...(incoming?.location || {}) },
    teamSection: { ...defaultSettings.teamSection, ...(incoming?.teamSection || {}) },
    team: Array.isArray(incoming?.team)
        ? incoming.team.map((member) => ({
            ...member,
            phoneType: member?.phoneType === 'whatsapp' ? 'whatsapp' : 'tel',
        }))
        : defaultSettings.team,
});

const ContactPageSettingsAdmin = () => {
    const [settings, setSettings] = useState(defaultSettings);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const apiRoot = window.wingateAdminData?.root || '/wp-json/';
    const nonce = window.wingateAdminData?.nonce || '';
    const adminUrl = window.wingateAdminData?.adminUrl || '/wp-admin/admin.php';

    useEffect(() => {
        const fetchSettings = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${apiRoot}wingate/v1/contact-page-settings`);
                if (!response.ok) throw new Error('Failed to fetch contact page settings');
                const data = await response.json();
                setSettings(mergeSettings(data));
            } catch (err) {
                setMessage({ text: 'Error loading settings: ' + err.message, type: 'error' });
            } finally {
                setIsLoading(false);
            }
        };

        fetchSettings();
    }, [apiRoot]);

    const updateNested = (section, field, value) => {
        setSettings((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const updateTeam = (index, field, value) => {
        setSettings((prev) => {
            const next = [...prev.team];
            const current = { ...next[index], [field]: value };

            if (field === 'phoneLabel' || field === 'phoneType') {
                current.phoneHref = phoneHrefFromLabel(
                    field === 'phoneLabel' ? value : current.phoneLabel,
                    field === 'phoneType' ? value : current.phoneType
                );
            }

            next[index] = current;
            return { ...prev, team: next };
        });
    };

    const addTeamMember = () => {
        setSettings((prev) => ({
            ...prev,
            team: [
                ...prev.team,
                {
                    name: '',
                    title: '',
                    phoneLabel: '',
                    phoneHref: 'tel:',
                    phoneType: 'tel',
                    email: '',
                },
            ],
        }));
    };

    const removeTeamMember = (index) => {
        setSettings((prev) => ({
            ...prev,
            team: prev.team.filter((_, idx) => idx !== index),
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage({ text: '', type: '' });

        try {
            const response = await fetch(`${apiRoot}wingate/v1/contact-page-settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error('Failed to save contact page settings');
            setMessage({ text: 'Contact page settings saved.', type: 'success' });
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
                    Loading contact page settings...
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
                    Contact Us <span className="text-brand-yellow">Page</span>
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl">
                    Edit contact page-specific content. Shared phone, email, address, and social links are managed in Contact &amp; Social.
                </p>
            </header>

            <section className="mb-8 rounded-2xl border border-brand-blue/15 bg-brand-blue/[0.03] px-5 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-brand-blue/85 m-0">
                    Need to change global email, phone, address, Facebook, or Instagram?
                </p>
                <a
                    href={`${adminUrl}?page=wingate-settings`}
                    className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue"
                >
                    Open Contact &amp; Social
                </a>
            </section>

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
                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Hero</h2>
                        <p className={SECTION_COPY_CLASS}>Main hero title and background image.</p>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Hero Title</label>
                            <input className={INPUT_CLASS} type="text" value={settings.hero.title} onChange={(e) => updateNested('hero', 'title', e.target.value)} />
                        </div>
                        <MediaPicker
                            label="Hero Background Image"
                            value={settings.hero.backgroundImage}
                            onSelect={(url) => updateNested('hero', 'backgroundImage', url)}
                        />
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Cards & Map Labels</h2>
                        <p className={SECTION_COPY_CLASS}>Card titles and location/map copy.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Club Heading</label>
                            <input className={INPUT_CLASS} type="text" value={settings.club.title} onChange={(e) => updateNested('club', 'title', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Map Section Title</label>
                            <input className={INPUT_CLASS} type="text" value={settings.location.mapSectionTitle} onChange={(e) => updateNested('location', 'mapSectionTitle', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Find Card Title</label>
                            <input className={INPUT_CLASS} type="text" value={settings.cards.findUsTitle} onChange={(e) => updateNested('cards', 'findUsTitle', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Email Card Title</label>
                            <input className={INPUT_CLASS} type="text" value={settings.cards.emailTitle} onChange={(e) => updateNested('cards', 'emailTitle', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Phone Card Title</label>
                            <input className={INPUT_CLASS} type="text" value={settings.cards.phoneTitle} onChange={(e) => updateNested('cards', 'phoneTitle', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Social Card Title</label>
                            <input className={INPUT_CLASS} type="text" value={settings.cards.socialTitle} onChange={(e) => updateNested('cards', 'socialTitle', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Location Line 1</label>
                            <input className={INPUT_CLASS} type="text" value={settings.location.lineOne} onChange={(e) => updateNested('location', 'lineOne', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Location Line 2</label>
                            <input className={INPUT_CLASS} type="text" value={settings.location.lineTwo} onChange={(e) => updateNested('location', 'lineTwo', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Find Us Link URL</label>
                            <input className={INPUT_CLASS} type="text" value={settings.location.mapUrl} onChange={(e) => updateNested('location', 'mapUrl', e.target.value)} />
                        </div>
                        <div>
                            <label className={FIELD_LABEL_CLASS}>Map Embed URL</label>
                            <input className={INPUT_CLASS} type="text" value={settings.location.mapEmbedUrl} onChange={(e) => updateNested('location', 'mapEmbedUrl', e.target.value)} />
                        </div>
                    </div>
                </section>

                <section className={SECTION_CLASS}>
                    <div className={SECTION_HEADER_CLASS}>
                        <h2 className={SECTION_TITLE_CLASS}>Team Section</h2>
                        <p className={SECTION_COPY_CLASS}>Edit the contact team cards displayed near the bottom of the page.</p>
                    </div>
                    <div className="mb-5">
                        <label className={FIELD_LABEL_CLASS}>Team Section Title</label>
                        <input className={INPUT_CLASS} type="text" value={settings.teamSection.title} onChange={(e) => updateNested('teamSection', 'title', e.target.value)} />
                    </div>

                    <div className="space-y-4">
                        {settings.team.map((member, index) => (
                            <article key={`${member.email}-${index}`} className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 md:p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-cinzel font-bold uppercase text-brand-blue">Team Member {index + 1}</h3>
                                    <button
                                        type="button"
                                        onClick={() => removeTeamMember(index)}
                                        className="text-[11px] font-bold uppercase tracking-[0.16em] text-red-600 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={FIELD_LABEL_CLASS}>Name</label>
                                        <input className={INPUT_CLASS} type="text" value={member.name || ''} onChange={(e) => updateTeam(index, 'name', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className={FIELD_LABEL_CLASS}>Role</label>
                                        <input className={INPUT_CLASS} type="text" value={member.title || ''} onChange={(e) => updateTeam(index, 'title', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className={FIELD_LABEL_CLASS}>Phone Label</label>
                                        <input className={INPUT_CLASS} type="text" value={member.phoneLabel || ''} onChange={(e) => updateTeam(index, 'phoneLabel', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className={FIELD_LABEL_CLASS}>Phone Link Type</label>
                                        <select className={INPUT_CLASS} value={member.phoneType === 'whatsapp' ? 'whatsapp' : 'tel'} onChange={(e) => updateTeam(index, 'phoneType', e.target.value)}>
                                            <option value="tel">Telephone call</option>
                                            <option value="whatsapp">WhatsApp only</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={FIELD_LABEL_CLASS}>Generated Link</label>
                                        <input className={INPUT_CLASS} type="text" value={member.phoneHref || phoneHrefFromLabel(member.phoneLabel, member.phoneType)} onChange={(e) => updateTeam(index, 'phoneHref', e.target.value)} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={FIELD_LABEL_CLASS}>Email</label>
                                        <input className={INPUT_CLASS} type="text" value={member.email || ''} onChange={(e) => updateTeam(index, 'email', e.target.value)} />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-5">
                        <button
                            type="button"
                            onClick={addTeamMember}
                            className="inline-flex items-center justify-center rounded-xl border border-brand-blue px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                        >
                            Add Team Member
                        </button>
                    </div>
                </section>

                <div className="sticky bottom-3 z-30">
                    <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4">
                        <p className="text-xs md:text-sm text-gray-500 m-0">
                            Save to apply Contact Us page changes.
                        </p>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className={`px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${isSaving
                                ? 'bg-brand-blue text-white opacity-50 cursor-not-allowed'
                                : 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue'
                                }`}
                        >
                            {isSaving ? 'Saving...' : 'Save Contact Page'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactPageSettingsAdmin;
