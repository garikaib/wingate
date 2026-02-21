import React, { useState, useEffect } from 'react';
import EventEditor from '../components/EventEditor';

const EventsAdmin = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [error, setError] = useState(null);

    const apiRoot = window.wingateEventsData?.root || '/wp-json/';
    const nonce = window.wingateEventsData?.nonce || '';

    const fetchEvents = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${apiRoot}wingate/v1/events`);
            if (!response.ok) throw new Error('Failed to fetch events');
            const data = await response.json();
            setEvents(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleCreateNew = () => {
        setEditingEvent(null);
        setIsEditorOpen(true);
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
        setIsEditorOpen(true);
    };

    const handleSave = async (eventData) => {
        try {
            const response = await fetch(`${apiRoot}wingate/v1/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(eventData),
            });

            if (!response.ok) throw new Error('Failed to save event');

            await fetchEvents(); // Refresh list
            setIsEditorOpen(false);
        } catch (err) {
            alert('Error saving event: ' + err.message);
        }
    };

    return (
        <div className="wingate-admin-spa p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-cinzel text-brand-blue font-bold">Wingate Events Manager</h1>
                <button
                    onClick={handleCreateNew}
                    className="bg-brand-blue text-white px-6 py-3 rounded hover:bg-opacity-90 transition font-montserrat font-bold uppercase tracking-wider"
                >
                    + Add New Event
                </button>
            </div>

            {error && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}

            {isLoading ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 font-montserrat">Loading events...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => (
                        <div key={event.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-yellow hover:shadow-xl transition relative group">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                                <button
                                    onClick={() => handleEdit(event)}
                                    className="text-gray-400 hover:text-brand-blue"
                                >
                                    Edit
                                </button>
                            </div>
                            <span className="inline-block bg-brand-gray text-xs font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide text-gray-500">
                                {event.type || 'Event'}
                            </span>
                            <h3 className="text-xl font-cinzel text-brand-blue font-bold mb-2">{event.title}</h3>
                            <p className="text-sm font-opensans text-gray-600 mb-4">
                                {event.date ? new Date(event.date).toLocaleDateString() : 'No Date Set'}
                            </p>
                        </div>
                    ))}

                    {events.length === 0 && (
                        <div className="col-span-full text-center py-12 bg-gray-50 rounded border border-dashed border-gray-300">
                            <p className="text-gray-500">No events found. Create your first one!</p>
                        </div>
                    )}
                </div>
            )}

            {isEditorOpen && (
                <EventEditor
                    event={editingEvent}
                    onClose={() => setIsEditorOpen(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default EventsAdmin;
