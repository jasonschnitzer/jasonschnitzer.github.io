import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Papers, dissertation, and policy work on network management, broadband measurement, and broadband policy.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Conference presentations and invited talks.",
        isActive: true,
    },
    projects: {
        title: "Code & Projects",
        subtitle: "",
        isActive: false,
    },
    teaching: {
        title: "Teaching",
        subtitle: "",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: false,
    },
};
