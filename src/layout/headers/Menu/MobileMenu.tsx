import React, { useState, useEffect } from "react";
import menu_data from "../../../data/MenuData";
import { HashLink as Link } from 'react-router-hash-link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileMenus = ({ setIsActive }: any) => {
    const [navTitle, setNavTitle] = useState("");
    const [activeLink, setActiveLink] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setActiveLink(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const closeSidebar = () => {
        setIsActive(false);
    };

    const openMobileMenu = (menu: string) => {
        setNavTitle(navTitle === menu ? "" : menu);
    };

    return (
        <ul className="navigation">
            {menu_data.map((menu) => (
                <React.Fragment key={menu.id}>
                    {menu.has_dropdown ? (
                        <li className="menu-item-has-children">
                            <Link
                                smooth
                                to={`#${menu.link}`}
                                onClick={closeSidebar}
                                className={`${activeLink === `#${menu.link}` ? "active" : ""}`}>
                                {menu.title}
                            </Link>
                            <div
                                className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                                onClick={() => openMobileMenu(menu.title)}>
                                <i className={`${navTitle === menu.title ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
                            </div>
                            {menu.sub_menus && menu.sub_menus.length > 0 && (
                                <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                                    {menu.sub_menus.map((sub, index) => (
                                        <li key={index}>
                                            <Link
                                                smooth
                                                to={`#${sub.link}`}
                                                onClick={closeSidebar}
                                                className={`${activeLink === `#${sub.link}` ? "active" : ""}`}>
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li>
                            <Link
                                smooth
                                to={`#${menu.link}`}
                                onClick={closeSidebar}
                                className={`${activeLink === `#${menu.link}` ? "active" : ""}`}>
                                {menu.title}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
}

export default MobileMenus;
