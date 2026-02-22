import React, { useCallback } from 'react';

const MediaPicker = ({ onSelect, value, label }) => {
    const handlePick = useCallback(() => {
        const frame = window.wp.media({
            title: 'Select or Upload Media',
            button: {
                text: 'Use this media',
            },
            multiple: false,
        });

        frame.on('select', () => {
            const attachment = frame.state().get('selection').first().toJSON();
            onSelect(attachment.url);
        });

        frame.open();
    }, [onSelect]);

    return (
        <div className="wingate-media-picker">
            {label && (
                <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-gray-600 mb-2">
                    {label}
                </label>
            )}
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
                <div className="flex items-start gap-4">
                    <div
                        className="w-28 h-28 rounded-xl border border-gray-200 overflow-hidden bg-white bg-cover bg-center flex items-center justify-center text-[10px] font-bold tracking-wider text-gray-400 uppercase"
                        style={value ? { backgroundImage: `url(${value})` } : undefined}
                    >
                        {!value ? 'No image' : null}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500 m-0">
                            Recommended: high-resolution image, landscape orientation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={handlePick}
                                className="px-4 py-2 bg-brand-blue text-white rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                            >
                                {value ? 'Change Image' : 'Select Image'}
                            </button>
                            {value && (
                                <button
                                    type="button"
                                    onClick={() => onSelect('')}
                                    className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-red-50 transition-colors"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                {value && (
                    <button
                        type="button"
                        onClick={() => window.open(value, '_blank', 'noopener,noreferrer')}
                        className="mt-3 text-xs text-brand-blue hover:text-brand-yellow font-semibold transition-colors"
                    >
                        View full image
                    </button>
                )}
            </div>
        </div>
    );
};

export default MediaPicker;
