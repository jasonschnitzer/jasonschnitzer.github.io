import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Mail",
        href: "mailto:jason@schnitzer.ca",
        linkTitle: `Send an email to Jason`,
        isActive: true,
    },
    {
        name: "Github",
        href: "https://github.com/jasonschnitzer",
        linkTitle: `Follow Jason on Github`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/",
        linkTitle: `Jason on Google Scholar`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
