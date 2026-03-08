import React, { useState } from 'react';

const SafeStateAdmin = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleRestore = async () => {
        const confirmed = window.confirm(
            "WARNING! DANGEROUS ACTION\n\n" +
            "This will completely wipe any custom Site Editor templates and overwrite physical theme files with the factory-default files.\n\n" +
            "Are you absolutely sure you want to restore the theme to its safe state?"
        );

        if (!confirmed) return;

        setStatus('loading');
        setMessage('Restoring templates and extracting safe files... Do not close this tab.');

        try {
            const apiRoot = window.wingateAdminData?.api?.root || '/wp-json/';
            const nonce = window.wingateAdminData?.api?.nonce;

            const url = `${apiRoot}wingate/v1/restore-safe-state`;
            const headers = {
                'Content-Type': 'application/json',
                ...(nonce ? { 'X-WP-Nonce': nonce } : {})
            };

            const req = await fetch(url, { method: 'POST', headers });
            const data = await req.json();

            if (req.ok) {
                setStatus('success');
                setMessage(data.message || 'Theme successfully restored to a safe state.');
            } else {
                setStatus('error');
                setMessage(data.message || 'An error occurred during restoration.');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
            setMessage('A network error occurred while communicating with the server.');
        }
    };

    return (
        <div className="wingate-admin-spa max-w-4xl mx-auto p-4 md:p-8 text-brand-blue">
            <header className="mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 mb-4 border border-red-200">
                    Emergency Tools
                </div>
                <h1 className="text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3">
                    Restore <span className="text-brand-yellow">Safe State</span>
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                    Use this tool strictly in emergencies when the website layout or templates have been mangled.
                    This process wipes all Site Editor custom templates for this theme and extracts a factory-default zip to restore physical files.
                </p>
            </header>

            <section className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-red-100 mb-8 max-w-2xl">
                <div className="flex gap-4 items-start bg-red-50 p-6 rounded-xl border border-red-200 mb-8">
                    <svg className="w-8 h-8 text-red-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                        <h3 className="text-red-800 font-bold text-lg mb-2">Severe Warning</h3>
                        <p className="text-sm text-red-700 leading-relaxed">
                            Clicking the button below is a destructive action. It deletes WP Templates stored in your database and unzips a fresh copy of the theme files instantly. Make sure you truly want a factory reset before proceeding.
                        </p>
                    </div>
                </div>

                {status === 'loading' && (
                    <div className="bg-blue-50 text-blue-800 p-4 border border-blue-200 rounded-lg flex items-center gap-3 font-bold text-sm mb-6 animate-pulse">
                        <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {message}
                    </div>
                )}

                {status === 'success' && (
                    <div className="bg-green-50 text-green-800 p-4 border border-green-200 rounded-lg font-bold text-sm mb-6 flex items-start gap-2">
                        <span className="text-xl">✅</span> <span>{message}</span>
                    </div>
                )}

                {status === 'error' && (
                    <div className="bg-red-50 text-red-800 p-4 border border-red-200 rounded-lg font-bold text-sm mb-6 flex items-start gap-2">
                        <span className="text-xl">❌</span> <span>{message}</span>
                    </div>
                )}

                <div className="flex flex-col items-center">
                    <button
                        type="button"
                        disabled={status === 'loading'}
                        onClick={handleRestore}
                        className="w-full relative shadow-md shadow-red-500/20 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-5 px-8 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                    >
                        <span className="relative z-10 text-lg uppercase tracking-wide font-cinzel flex items-center justify-center gap-3">
                            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Factory Reset Theme
                        </span>
                    </button>
                    <p className="text-xs text-gray-400 mt-4">
                        This extracts <code className="bg-gray-100 text-gray-600 px-1 rounded">wingate-safe.zip</code> stored in the active theme directory.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SafeStateAdmin;
