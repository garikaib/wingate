const PLACEHOLDER_LINK = '#';

const normalizeValue = (value) => {
    if (typeof value !== 'string') {
        return PLACEHOLDER_LINK;
    }

    const trimmed = value.trim();
    return trimmed === '' ? PLACEHOLDER_LINK : trimmed;
};

export const getContactDetails = () => {
    const details =
        typeof window !== 'undefined' && window.wingateThemeData?.contactDetails
            ? window.wingateThemeData.contactDetails
            : {};

    return {
        email: normalizeValue(details.email),
        phone: normalizeValue(details.phone),
        phoneType: details.phoneType === 'whatsapp' ? 'whatsapp' : 'tel',
        facebook: normalizeValue(details.facebook),
        instagram: normalizeValue(details.instagram),
    };
};

export const toEmailHref = (email) => (email === PLACEHOLDER_LINK ? PLACEHOLDER_LINK : `mailto:${email}`);

const toPhoneDigits = (phone) => phone.replace(/[^\d+]/g, '');

const toWhatsAppNumber = (phone) => {
    const digits = toPhoneDigits(phone);

    if (digits.startsWith('+')) {
        return digits.slice(1).replace(/\D/g, '');
    }

    if (digits.startsWith('0')) {
        return `263${digits.slice(1).replace(/\D/g, '')}`;
    }

    return digits.replace(/\D/g, '');
};

export const toPhoneHref = (phone, phoneType = 'tel') => {
    if (phone === PLACEHOLDER_LINK) {
        return PLACEHOLDER_LINK;
    }

    if (phoneType === 'whatsapp') {
        const whatsappNumber = toWhatsAppNumber(phone);
        return whatsappNumber ? `https://wa.me/${whatsappNumber}` : PLACEHOLDER_LINK;
    }

    return `tel:${toPhoneDigits(phone)}`;
};

export const toPhoneLinkProps = (phoneType = 'tel') =>
    phoneType === 'whatsapp' ? { target: '_blank', rel: 'noreferrer' } : {};

export const toExternalLinkProps = (url) =>
    url === PLACEHOLDER_LINK ? {} : { target: '_blank', rel: 'noreferrer' };
