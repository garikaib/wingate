import React, { useEffect, useRef, useState } from 'react';
import { getDefaultPathForHole } from '../config/default-holes';

const MapLineEditor = ({ pathData, onChange, holeNumber }) => {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const pathRef = useRef(null);
    const markersRef = useRef([]);

    const [isEditing, setIsEditing] = useState(false);

    // We keep a local copy to draw instantly. If there's no saved pathData, we load the algorithmic default.
    const getInitialPath = () => {
        if (pathData && pathData.length > 0) return pathData;
        return getDefaultPathForHole(holeNumber);
    };

    const [localPath, setLocalPath] = useState(getInitialPath());

    // Effect to handle initialization
    useEffect(() => {
        if (!isEditing || !mapContainerRef.current) return;

        // Make sure Leaflet is available. If it's not, we can't render the map.
        if (!window.L) {
            console.error("Leaflet is not loaded on this page.");
            return;
        }

        // Initialize Map
        const center = localPath.length > 0 ? localPath[0] : [-17.72073, 31.07663];

        if (!mapRef.current) {
            mapRef.current = window.L.map(mapContainerRef.current, {
                zoomControl: true,
                scrollWheelZoom: true,
                maxZoom: 19,
                minZoom: 14,
            }).setView(center, 17);

            const satelliteLayer = window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 19,
                attribution: 'Tiles &copy; Esri',
            });
            satelliteLayer.addTo(mapRef.current);

            // Handle Map Clicks to add points
            mapRef.current.on('click', (e) => {
                const newPoint = [e.latlng.lat, e.latlng.lng];
                setLocalPath(prev => [...prev, newPoint]);
            });
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.off('click');
                mapRef.current.remove();
                mapRef.current = null;
            }
        }
    }, [isEditing]); // re-init when modal opens

    // Effect to update the visible path when localPath changes
    useEffect(() => {
        if (!mapRef.current || !window.L) return;

        // Cleanup old path
        if (pathRef.current) {
            mapRef.current.removeLayer(pathRef.current);
        }

        // Cleanup old markers
        markersRef.current.forEach(m => mapRef.current.removeLayer(m));
        markersRef.current = [];

        // Draw new path
        if (localPath && localPath.length > 0) {
            pathRef.current = window.L.polyline(localPath, {
                color: '#ff7a00',
                weight: 5,
                opacity: 1,
            }).addTo(mapRef.current);

            // Add Tee Marker
            if (localPath.length > 0) {
                const teeMarker = window.L.circleMarker(localPath[0], {
                    radius: 6,
                    weight: 2,
                    color: '#ffffff',
                    fillColor: '#0e1b3d',
                    fillOpacity: 1,
                }).bindTooltip("Tee", { permanent: true, direction: "right", className: "font-bold text-xs" }).openTooltip().addTo(mapRef.current);
                markersRef.current.push(teeMarker);
            }

            // Add Green Marker
            if (localPath.length > 1) {
                const greenMarker = window.L.circleMarker(localPath[localPath.length - 1], {
                    radius: 7,
                    weight: 2,
                    color: '#ffffff',
                    fillColor: '#2b8a3e',
                    fillOpacity: 1,
                }).bindTooltip("Green", { permanent: true, direction: "left", className: "font-bold text-xs text-green-700" }).openTooltip().addTo(mapRef.current);
                markersRef.current.push(greenMarker);
            }

            // Re-center map if we are on a new hole
            mapRef.current.fitBounds(pathRef.current.getBounds(), { padding: [20, 20], maxZoom: 18 });
        }

        // We invalidate the size to prevent Leaflet from showing grey tiles if the modal transition caused dimension calculation issues
        setTimeout(() => {
            if (mapRef.current) mapRef.current.invalidateSize();
        }, 100);

    }, [localPath, holeNumber, isEditing]);

    // Force update local state when hole changes from parent
    useEffect(() => {
        if (pathData && pathData.length > 0) {
            setLocalPath(pathData);
        } else {
            setLocalPath(getDefaultPathForHole(holeNumber));
        }
    }, [holeNumber, pathData]);

    const handleClear = () => {
        setLocalPath([]);
    };

    const handleUndo = () => {
        setLocalPath(prev => prev.slice(0, -1));
    }

    const handleSaveRoute = () => {
        onChange(localPath);
        setIsEditing(false);
    };

    const handleClose = () => {
        const initialPath = getInitialPath();
        const hasChanges = JSON.stringify(localPath) !== JSON.stringify(initialPath);
        if (hasChanges) {
            const discard = window.confirm("You have unsaved changes to this hole's route.\n\nAre you sure you want to discard these changes and close the editor?");
            if (!discard) {
                return;
            }
            // Discard changes
            setLocalPath(initialPath);
        }
        setIsEditing(false);
    };

    return (
        <div className="map-editor-wrapper mt-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700">Course Routing</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {localPath.length} Points Plotted
                </span>
            </div>

            <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-brand-blue hover:text-brand-blue transition-colors flex flex-col items-center justify-center gap-2"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="font-bold">Open Fullscreen Editor</span>
            </button>

            {isEditing && (
                <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">
                    <div className="bg-white rounded-xl shadow-2xl w-full h-full max-w-6xl flex flex-col overflow-hidden animate-fade-in-up">
                        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                            <div>
                                <h3 className="font-cinzel font-bold text-xl text-brand-blue">Hole {holeNumber} Routing Editor</h3>
                                <p className="text-xs text-gray-500">
                                    Click on the map to place dots. First dot = <strong>Tee</strong>, Last dot = <strong>Green</strong>.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                {!window.L && <span className="text-xs text-red-500 font-bold mr-4">Leaflet JS Load Error</span>}
                                <button
                                    type="button"
                                    onClick={handleUndo}
                                    disabled={localPath.length === 0}
                                    className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded font-bold disabled:opacity-50"
                                >
                                    Undo Point
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    disabled={localPath.length === 0}
                                    className="text-sm bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded font-bold disabled:opacity-50"
                                >
                                    Clear Route
                                </button>
                                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="text-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 px-6 py-2 rounded font-bold transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSaveRoute}
                                    className="text-sm bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue px-6 py-2 rounded font-bold transition-colors"
                                >
                                    Save Route
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-100 relative">
                            <div
                                ref={mapContainerRef}
                                className="w-full h-full"
                                style={{ zIndex: 1 }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapLineEditor;
