import React from 'react';
import { getContactDetails, toEmailHref, toPhoneHref, toPhoneLinkProps } from '../config/contactDetails';

const ContactInfoStrip = () => {
    const contactDetails = getContactDetails();

    return (
        <section className="bg-[#efeee8] px-6 py-14 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8">
                    <div>
                        <h3 className="font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl">
                            Contact Us
                        </h3>
                        <div className="mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80"></div>
                        <p className="font-montserrat text-lg text-brand-blue">
                            Email:{' '}
                            <a
                                href={toEmailHref(contactDetails.email)}
                                className="text-[#a67c37] transition-colors hover:text-brand-blue"
                            >
                                {contactDetails.email}
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl">
                            Call Us
                        </h3>
                        <div className="mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80"></div>
                        <p className="font-montserrat text-lg text-brand-blue">
                            <a href={toPhoneHref(contactDetails.phone, contactDetails.phoneType)} {...toPhoneLinkProps(contactDetails.phoneType)} className="transition-colors hover:text-brand-yellow">
                                {contactDetails.phone}
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl">
                            Visit Us
                        </h3>
                        <div className="mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80"></div>
                        <a
                            href="https://maps.google.com/?q=Wingate+Park+Golf+Club+Alpes+Road+Harare"
                            target="_blank"
                            rel="noreferrer"
                            className="font-montserrat text-lg text-brand-blue transition-colors hover:text-brand-yellow"
                        >
                            Alpes Road, Pomona
                            <br />
                            Harare, Zimbabwe
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoStrip;
