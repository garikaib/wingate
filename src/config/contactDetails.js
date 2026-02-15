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
        facebook: normalizeValue(details.facebook),
        instagram: normalizeValue(details.instagram),
    };
};

export const toEmailHref = (email) => (email === PLACEHOLDER_LINK ? PLACEHOLDER_LINK : `mailto:${email}`);

export const toPhoneHref = (phone) =>
    phone === PLACEHOLDER_LINK ? PLACEHOLDER_LINK : `tel:${phone.replace(/\s+/g, '')}`;

export const toExternalLinkProps = (url) =>
    url === PLACEHOLDER_LINK ? {} : { target: '_blank', rel: 'noreferrer' };
