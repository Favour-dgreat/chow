
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "home", // Corresponds to <Element name="home">...</Element>
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "about", // Corresponds to <Element name="download-area">...</Element>
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Chownomics",
        link: "chownomics", // Corresponds to <Element name="chownomics">...</Element>
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Useful Links",
        link: "links", // Corresponds to <Element name="links">...</Element>
    },
];

export default menu_data;
