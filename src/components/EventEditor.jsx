import React, { useState, useEffect } from 'react';

const EventEditor = ({ event, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        id: 0,
        title: '',
        date: '',
        type: 'tournament',
        description: '',
    });

    useEffect(() => {
        if (event) {
            setFormData({
                id: event.id,
                title: event.title || '',
                date: event.date || '',
                type: event.type || 'tournament',
                description: event.description || '',
                // Wedding
                groom: event.groom || '',
                bride: event.bride || '',
                reception: event.reception || '',
                is_private: event.is_private || false,
                // Tournament
                format: event.format || '',
                tee_off: event.tee_off || '',
                entry_fee: event.entry_fee || '',
            });
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
                <div className="bg-brand-blue p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-cinzel text-white font-bold">
                        {event ? 'Edit Event' : 'New Event'}
                    </h2>
                    <button onClick={onClose} className="text-white hover:text-brand-yellow text-2xl">&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide">Event Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition"
                            placeholder="e.g. Wingate Monthly Medal"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide">Event Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide">Event Type</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition appearance-none bg-white"
                            >
                                <option value="tournament">Tournament</option>
                                <option value="wedding">Wedding</option>
                                <option value="banquet">Banquet</option>
                                <option value="social">Social</option>
                            </select>
                        </div>
                    </div>

                    {/* Conditional Fields based on Type */}
                    {formData.type === 'wedding' && (
                        <div className="bg-brand-gray/50 p-6 rounded-lg border border-gray-200 animate-fade-in-up">
                            <h3 className="text-brand-blue font-cinzel font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2">Wedding Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase">Groom's Name</label>
                                    <input
                                        type="text"
                                        name="groom"
                                        value={formData.groom || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none"
                                        placeholder="e.g. John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase">Bride's Name</label>
                                    <input
                                        type="text"
                                        name="bride"
                                        value={formData.bride || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none"
                                        placeholder="e.g. Sarah"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase">Reception Information</label>
                                <input
                                    type="text"
                                    name="reception"
                                    value={formData.reception || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none"
                                    placeholder="e.g. Main Hall, 6:00 PM"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="is_private"
                                    checked={formData.is_private || false}
                                    onChange={(e) => setFormData(prev => ({ ...prev, is_private: e.target.checked }))}
                                    id="is_private_check"
                                    className="accent-brand-blue w-4 h-4"
                                />
                                <label htmlFor="is_private_check" className="text-sm font-bold text-gray-700 font-montserrat select-none cursor-pointer">Make this event Private (Withhold details)</label>
                            </div>
                        </div>
                    )}

                    {formData.type === 'tournament' && (
                        <div className="bg-brand-gray/50 p-6 rounded-lg border border-gray-200 animate-fade-in-up">
                            <h3 className="text-brand-blue font-cinzel font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2">Tournament Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase">Format</label>
                                    <input
                                        type="text"
                                        name="format"
                                        value={formData.format || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none"
                                        placeholder="e.g. Individual Stableford"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase">Entry Fee</label>
                                    <input
                                        type="text"
                                        name="entry_fee"
                                        value={formData.entry_fee || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none"
                                        placeholder="e.g. $20 Members / $30 Visitors"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase">Tee Off Time</label>
                                    <input
                                        type="text"
                                        name="tee_off"
                                        value={formData.tee_off || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none"
                                        placeholder="e.g. Morning Field 7:00am - 9:00am"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition"
                            placeholder="Event details..."
                        ></textarea>
                    </div>

                    <div className="pt-4 flex justify-end gap-4 border-t border-gray-100 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 rounded text-gray-600 hover:text-gray-800 font-bold uppercase tracking-wide transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-brand-blue text-white px-8 py-2 rounded hover:bg-opacity-90 transition font-bold uppercase tracking-wide shadow-lg"
                        >
                            Save Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventEditor;
