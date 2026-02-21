import React, { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const DatePicker = ({ label, name, value, onChange, placeholder = "DD/MM/YYYY" }) => {
    const baseDate = new Date();
    baseDate.setFullYear(baseDate.getFullYear() - 5);
    baseDate.setHours(0, 0, 0, 0);

    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date(baseDate));
    const [selectedDate, setSelectedDate] = useState(null);
    const containerRef = useRef(null);

    // Initialize state from value prop if present
    useEffect(() => {
        if (value) {
            const parts = typeof value === 'string' ? value.split('-').map(Number) : [];
            const date = parts.length === 3 ? new Date(parts[0], parts[1] - 1, parts[2]) : new Date(value);
            if (!isNaN(date.getTime())) {
                setSelectedDate(date);
                setCurrentDate(date);
            }
        }
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const yearOptions = Array.from({ length: 101 }, (_, i) => baseDate.getFullYear() - i);

    const isAfterBaseDate = (date) => date.getTime() > baseDate.getTime();

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const numDays = daysInMonth(year, month);
        const startingDay = firstDayOfMonth(year, month);
        const days = [];

        // Previous month filler
        for (let i = 0; i < startingDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        // Days
        for (let day = 1; day <= numDays; day++) {
            const date = new Date(year, month, day);
            const isDisabled = isAfterBaseDate(date);
            const isSelected = selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

            days.push(
                <button
                    key={day}
                    onClick={(e) => handleDateClick(e, day)}
                    disabled={isDisabled}
                    className={`
                        p-2 text-sm font-montserrat transition-all duration-200 rounded-sm
                        ${isSelected
                            ? 'bg-brand-yellow text-brand-blue font-bold shadow-md'
                            : 'text-brand-blue hover:bg-brand-blue/10 hover:text-brand-yellow'
                        }
                        ${isDisabled ? 'opacity-30 cursor-not-allowed hover:bg-transparent hover:text-brand-blue' : ''}
                    `}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    const handleDateClick = (e, day) => {
        e.preventDefault(); // Prevent form submission
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (isAfterBaseDate(newDate)) return;
        setSelectedDate(newDate);
        setIsOpen(false);

        // Format for form state (YYYY-MM-DD for consistency with standard inputs)
        const year = newDate.getFullYear();
        const month = String(newDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(newDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${dayStr}`;

        // Create customizable event for parent handler
        const event = {
            target: {
                name: name,
                value: formattedDate
            }
        };
        onChange(event);
    };

    const changeMonth = (e, offset) => {
        e.preventDefault();
        const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
        if (isAfterBaseDate(nextDate)) return;
        setCurrentDate(nextDate);
    };

    const changeYear = (e, offset) => {
        e.preventDefault();
        const nextDate = new Date(currentDate.getFullYear() + offset, currentDate.getMonth(), 1);
        if (isAfterBaseDate(nextDate)) return;
        setCurrentDate(nextDate);
    };

    const setMonthFromDropdown = (e) => {
        const month = Number(e.target.value);
        const nextDate = new Date(currentDate.getFullYear(), month, 1);
        if (isAfterBaseDate(nextDate)) return;
        setCurrentDate(nextDate);
    };

    const setYearFromDropdown = (e) => {
        const year = Number(e.target.value);
        const nextDate = new Date(year, currentDate.getMonth(), 1);
        if (isAfterBaseDate(nextDate)) return;
        setCurrentDate(nextDate);
    };

    const formatDateDisplay = (date) => {
        if (!date) return "";
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <div className={`mb-4 w-full field-anim relative ${isOpen ? 'z-50' : 'z-0'}`} ref={containerRef}>
            <label className="block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide">
                {label}
            </label>

            {/* Input Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full bg-white/50 border cursor-pointer flex items-center justify-between
                    px-4 py-3 text-brand-blue transition-all font-montserrat
                    ${isOpen ? 'border-brand-yellow ring-1 ring-brand-yellow' : 'border-brand-yellow/30 hover:border-brand-yellow/60'}
                `}
            >
                <span className={selectedDate ? 'text-brand-blue font-medium' : 'text-brand-blue/40'}>
                    {selectedDate ? formatDateDisplay(selectedDate) : placeholder}
                </span>
                <CalendarIcon size={18} className="text-brand-yellow" />
            </div>

            {/* Calendar Popup */}
            {isOpen && (
                <div className="absolute z-[1000] mt-1 top-full left-0 w-72 bg-white border border-brand-yellow/20 shadow-xl rounded-sm p-4 animate-in fade-in zoom-in-95 duration-200">
                    {/* Header */}
                    <div className="grid grid-cols-2 gap-2 mb-4 pb-3 border-b border-brand-yellow/10">
                        <select
                            value={currentDate.getMonth()}
                            onChange={setMonthFromDropdown}
                            className="w-full border border-brand-yellow/30 bg-white px-2 py-2 text-sm font-montserrat text-brand-blue focus:outline-none focus:border-brand-yellow"
                        >
                            {months.map((month, index) => {
                                const optionDate = new Date(currentDate.getFullYear(), index, 1);
                                return (
                                    <option key={month} value={index} disabled={isAfterBaseDate(optionDate)}>
                                        {month}
                                    </option>
                                );
                            })}
                        </select>
                        <select
                            value={currentDate.getFullYear()}
                            onChange={setYearFromDropdown}
                            className="w-full border border-brand-yellow/30 bg-white px-2 py-2 text-sm font-montserrat text-brand-blue focus:outline-none focus:border-brand-yellow"
                        >
                            {yearOptions.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                        <button onClick={(e) => changeMonth(e, -1)} className="p-1 text-brand-blue hover:text-brand-yellow transition-colors"><ChevronLeft size={16} /></button>
                        <span className="font-montserrat font-semibold text-brand-yellow uppercase text-sm tracking-wider">
                            {months[currentDate.getMonth()]}
                        </span>
                        <button onClick={(e) => changeMonth(e, 1)} className="p-1 text-brand-blue hover:text-brand-yellow transition-colors"><ChevronRight size={16} /></button>
                    </div>

                    {/* Day Names */}
                    <div className="grid grid-cols-7 mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                            <div key={d} className="text-center text-[10px] font-bold text-brand-blue/40 uppercase font-cinzel">
                                {d}
                            </div>
                        ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {generateCalendar()}
                    </div>

                    <div className="mt-3 pt-2 border-t border-brand-blue/5 flex justify-center">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                const defaultDate = new Date(baseDate);
                                setCurrentDate(defaultDate);
                                setSelectedDate(defaultDate);
                                const event = { target: { name, value: defaultDate.toISOString().split('T')[0] } };
                                onChange(event);
                                setIsOpen(false);
                            }}
                            className="text-xs font-cinzel text-brand-yellow hover:text-brand-blue transition-colors uppercase tracking-widest font-bold"
                        >
                            Use Default (5 Years Ago)
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
