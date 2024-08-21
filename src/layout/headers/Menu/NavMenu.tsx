/* eslint-disable @typescript-eslint/no-explicit-any */
import menu_data from "../../../data/MenuData";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const NavMenu = () => {
    const location = useLocation();
    const currentRoute = location.pathname;

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    return (
        <ul className="navigation">
            {menu_data.map((menu: any) => (
                <li key={menu.id} className={menu.has_dropdown ? "menu-item-has-children" : ""}>
                    <ScrollLink
                        to={menu.link}
                        smooth={true}
                        duration={500}
                        className={`section-link ${
                            (isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m: any) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""
                        }`}
                    >
                        {menu.title}
                    </ScrollLink>

                    {menu.has_dropdown && menu.sub_menus && (
                        <ul className="sub-menu">
                            {menu.sub_menus.map((sub_m: any, i: any) => (
                                <li key={i}>
                                    <ScrollLink
                                        to={sub_m.link}
                                        smooth={true}
                                        duration={500}
                                        className={sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}
                                    >
                                        {sub_m.title}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
