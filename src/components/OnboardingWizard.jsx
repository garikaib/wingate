import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, Download, Check, SkipForward } from 'lucide-react';
import gsap from 'gsap';
import DatePicker from './DatePicker';

/* ── tiny inline SVG golf ball ─────────────────────────────── */
const GolfBall = ({ className = '' }) => (
    <svg viewBox="0 0 40 40" className={className} fill="none">
        <circle cx="20" cy="20" r="18" fill="#fff" stroke="#C5A059" strokeWidth="1.5" />
        <circle cx="16" cy="15" r="1.2" fill="#e0d6c2" />
        <circle cx="22" cy="13" r="1" fill="#e0d6c2" />
        <circle cx="19" cy="20" r="1.1" fill="#e0d6c2" />
        <circle cx="25" cy="18" r="0.9" fill="#e0d6c2" />
        <circle cx="14" cy="22" r="1" fill="#e0d6c2" />
    </svg>
);

const TextField = ({ label, name, value, onChange, type = "text", placeholder = "", width = "w-full" }) => (
    <div className={`mb-4 ${width} field-anim`}>
        <label className="block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-white/50 border border-brand-yellow/30 rounded-none px-4 py-3 text-brand-blue placeholder-brand-blue/40 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all font-montserrat"
        />
    </div>
);

const SelectField = ({ label, name, value, onChange, options, placeholder = "Select...", width = "w-full" }) => (
    <div className={`mb-4 ${width} field-anim`}>
        <label className="block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide">
            {label}
        </label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-white/50 border border-brand-yellow/30 rounded-none px-4 py-3 text-brand-blue focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all font-montserrat"
        >
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

const OnboardingWizard = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        surname: '', first_names: '', title: '', dob: '', occupation: '',
        home_address: '', postal_address: '',
        email: '', mobile: '', home_tel: '', work_tel: '',
        prev_club: '', handicap: '', player_id: '',
        category: '',
        proposer_name: '', proposer_id: '',
        seconder_name: '', seconder_id: '',
        date_signed: new Date().toLocaleDateString('en-GB')
    });
    const [loading, setLoading] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);

    const containerRef = useRef(null);
    const formRef = useRef(null);
    const ballRef = useRef(null);
    const prevStepRef = useRef(0);

    /* ── Golf-swing arc animation on step change ── */
    const animateSwing = useCallback((direction) => {
        if (!ballRef.current || !containerRef.current) return;
        const tl = gsap.timeline();
        const mult = direction === 'forward' ? 1 : -1;

        // Golf ball traces a parabolic arc across the card
        tl.set(ballRef.current, { opacity: 1 })
            .fromTo(ballRef.current,
                { x: mult * -120, y: 0, scale: 0.6 },
                { x: mult * 120, y: -80, scale: 1, duration: 0.35, ease: "power2.out" }
            )
            .to(ballRef.current,
                { x: mult * 300, y: 20, scale: 0.4, opacity: 0, duration: 0.3, ease: "power1.in" }
            );
    }, []);

    /* ── GSAP transitions between steps ── */
    useEffect(() => {
        if (!formRef.current) return;
        const direction = step >= prevStepRef.current ? 'forward' : 'backward';
        const xFrom = direction === 'forward' ? 60 : -60;

        // Animate the form content sliding in
        gsap.fromTo(formRef.current,
            { opacity: 0, x: xFrom, y: 10 },
            { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" }
        );

        // Stagger-in for the input fields
        const fields = formRef.current.querySelectorAll('.field-anim');
        if (fields.length) {
            gsap.fromTo(fields,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, delay: 0.15, ease: "power2.out" }
            );
        }

        // Golf ball arc
        animateSwing(direction);

        prevStepRef.current = step;
    }, [step, animateSwing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const submitForm = async () => {
        setLoading(true);
        try {
            const apiRoot = window.wingateThemeData?.root || '/wp-json/';
            const publicRestNonce = window.wingateThemeData?.publicRestNonce || '';
            const response = await fetch(`${apiRoot}wingate/v1/generate-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Wingate-Nonce': publicRestNonce,
                },
                body: JSON.stringify({
                    ...formData,
                    website: '',
                })
            });
            const data = await response.json();
            if (data.success) {
                setPdfUrl(data.url);
                nextStep();
            } else {
                alert("Error generating PDF. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    const stepLabels = ['Personal', 'Contact', 'History', 'Membership'];
    const titleOptions = [
        { value: 'Mr', label: 'Mr' },
        { value: 'Mrs', label: 'Mrs' },
        { value: 'Ms', label: 'Ms' },
        { value: 'Dr', label: 'Dr' },
        { value: 'Prof', label: 'Prof' },
        { value: 'Miss', label: 'Miss' },
        { value: 'Rev', label: 'Rev' },
        { value: 'Hon', label: 'Hon' }
    ];

    const steps = [
        // 0. Personal Details
        <div key="personal">
            <h3 className="text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField label="Surname" name="surname" value={formData.surname} onChange={handleChange} />
                <TextField label="First Names" name="first_names" value={formData.first_names} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectField
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    options={titleOptions}
                    placeholder="Select title"
                />
                <div className="mb-4 md:col-span-2">
                    <DatePicker
                        label="Date of Birth"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <TextField label="Occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
            <TextField label="Home Address" name="home_address" value={formData.home_address} onChange={handleChange} />
            <TextField label="Postal Address" name="postal_address" value={formData.postal_address} onChange={handleChange} placeholder="If different from home address" />
        </div>,

        // 1. Contact Details
        <div key="contact">
            <h3 className="text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2">Contact Details</h3>
            <TextField label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TextField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
                <TextField label="Home Tel" name="home_tel" value={formData.home_tel} onChange={handleChange} />
                <TextField label="Work Tel" name="work_tel" value={formData.work_tel} onChange={handleChange} />
            </div>
        </div>,

        // 2. Golf History
        <div key="golf">
            <h3 className="text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2">Golf History</h3>
            <TextField label="Previous Club" name="prev_club" value={formData.prev_club} onChange={handleChange} />
            <div className="grid grid-cols-2 gap-4">
                <TextField label="Current Handicap" name="handicap" value={formData.handicap} onChange={handleChange} />
                <TextField label="SA Player ID" name="player_id" value={formData.player_id} onChange={handleChange} />
            </div>
        </div>,

        // 3. Membership Category
        <div key="membership">
            <h3 className="text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2">Membership Category</h3>
            <div className="space-y-3 font-montserrat text-brand-blue">
                {['full_men', 'full_ladies', 'student', 'country_men', 'country_ladies', 'junior', 'senior', 'limited'].map((cat) => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer group p-3 border border-transparent hover:border-brand-yellow/30 rounded transition-all field-anim">
                        <input
                            type="radio"
                            name="category"
                            value={cat}
                            checked={formData.category === cat}
                            onChange={handleChange}
                            className="form-radio text-brand-yellow focus:ring-brand-yellow h-5 w-5"
                        />
                        <span className="uppercase font-semibold group-hover:text-brand-yellow transition-colors">
                            {cat.replace(/_/g, ' ')}
                        </span>
                    </label>
                ))}
            </div>

            <h3 className="text-xl font-cinzel text-brand-yellow mt-8 mb-4 border-b border-brand-yellow/20 pb-2">Proposer & Seconder</h3>
            <div className="grid grid-cols-2 gap-4">
                <TextField label="Proposer Name" name="proposer_name" value={formData.proposer_name} onChange={handleChange} />
                <TextField label="Membership No" name="proposer_id" value={formData.proposer_id} onChange={handleChange} />
                <TextField label="Seconder Name" name="seconder_name" value={formData.seconder_name} onChange={handleChange} />
                <TextField label="Membership No" name="seconder_id" value={formData.seconder_id} onChange={handleChange} />
            </div>
        </div>
    ];

    useEffect(() => {
        if (step !== steps.length || !containerRef.current) return;
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [step, steps.length]);

    // 4. Success Step
    const SuccessStep = (
        <div className="text-center py-10">
            <div className="flex justify-center mb-6">
                <div className="bg-brand-yellow/20 p-4 rounded-full border-2 border-brand-yellow text-brand-yellow animate-bounce">
                    <Check size={48} />
                </div>
            </div>
            <h3 className="text-3xl font-cinzel text-brand-blue mb-4">Application Ready!</h3>
            <p className="font-montserrat text-brand-blue/80 mb-8 max-w-md mx-auto">
                Your application form has been generated. Please download, sign, and submit it to the club office.
            </p>

            {pdfUrl && (
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-brand-blue !text-white visited:!text-white no-underline hover:no-underline focus:no-underline px-8 py-4 rounded-none hover:bg-brand-blue/90 transition-all duration-300 font-cinzel font-bold text-lg shadow-lg group"
                >
                    <Download className="group-hover:animate-bounce !text-white" />
                    <span className="!text-white">Download Application Form</span>
                </a>
            )}

            <p className="mt-8 text-sm text-brand-blue/60 font-montserrat">
                Need a blank form instead? <a href="/docs/forms/Membership_Application_2026.pdf" className="text-brand-yellow hover:underline">Download Blank PDF</a>
            </p>
        </div>
    );

    const isLastStep = step === steps.length - 1;
    const isSuccess = step === steps.length;

    return (
        <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-brand-yellow/20 shadow-2xl p-8 md:p-12 relative overflow-hidden" ref={containerRef}>

            {/* Floating golf ball for swing animation */}
            <div ref={ballRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-0 z-30">
                <GolfBall className="w-full h-full drop-shadow-lg" />
            </div>

            {/* Progress Bar */}
            {!isSuccess && (
                <div className="mb-10">
                    <div className="flex justify-between mb-3">
                        {stepLabels.map((label, i) => (
                            <div key={label} className="flex flex-col items-center flex-1">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-cinzel border-2 transition-all duration-500 ${i < step ? 'bg-brand-yellow border-brand-yellow text-white' :
                                    i === step ? 'border-brand-yellow text-brand-yellow bg-brand-yellow/10' :
                                        'border-brand-blue/20 text-brand-blue/40'
                                    }`}>
                                    {i < step ? <Check size={14} /> : i + 1}
                                </div>
                                <span className={`mt-1 text-[10px] uppercase tracking-widest font-cinzel transition-colors duration-300 ${i <= step ? 'text-brand-yellow font-bold' : 'text-brand-blue/40'
                                    }`}>{label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="h-1 bg-brand-blue/10 w-full rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-brand-yellow to-brand-yellow transition-all duration-700 ease-out rounded-full"
                            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div ref={formRef} className="min-h-[400px]">
                {isSuccess ? SuccessStep : steps[step]}
            </div>

            {/* Navigation */}
            {!isSuccess && (
                <div className="flex justify-between items-center mt-12 pt-6 border-t border-brand-blue/10">
                    {step > 0 ? (
                        <button
                            onClick={prevStep}
                            className="flex items-center space-x-2 text-brand-blue/60 hover:text-brand-blue font-montserrat font-semibold transition-colors group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back</span>
                        </button>
                    ) : (
                        <div />
                    )}

                    <div className="flex space-x-4">
                        <button
                            onClick={nextStep}
                            className="flex items-center space-x-2 text-brand-blue/40 hover:text-brand-blue/60 font-montserrat text-sm transition-colors"
                        >
                            <span>Skip</span>
                            <SkipForward size={14} />
                        </button>

                        <button
                            onClick={isLastStep ? submitForm : nextStep}
                            disabled={loading}
                            className="flex items-center space-x-2 bg-brand-blue text-white px-8 py-3 hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 font-cinzel font-bold shadow-md group"
                        >
                            {loading ? (
                                <>
                                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                                    <span>Generating...</span>
                                </>
                            ) : (
                                <>
                                    <span>{isLastStep ? 'Finish & Download' : 'Next Step'}</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OnboardingWizard;
