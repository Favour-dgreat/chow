interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/#download-area",
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Chonomics",
        link: "/#chownomics",
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Useful Links",
        link: "/#links",
    },
    
    
];
export default menu_data;
