import NavLink from "components/NavLink";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import logo from './logo.png';
function Header() {
    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <div>
                <NavLink caminho="/">
                    <img src={logo} alt="Logo da CineTag" />
                </NavLink>
            </div>
            <nav className={styles.menu}>
                <NavLink caminho="/" ativo={pathname === "/" && "ativo"}>
                    Home
                </NavLink>
                <NavLink caminho="/favoritos" ativo={pathname === "/favoritos" && "ativo"}>
                    Favoritos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;