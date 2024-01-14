import { Link } from "react-router-dom";
import styles from "./Link.module.css";

function NavLink({ children, caminho, ativo }) {
    return (
        <Link to={ caminho } className={`${styles.link} ${styles[ativo]}`} >
            { children }
        </Link>
    );
}

export default NavLink;