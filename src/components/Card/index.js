import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import coracaoVazio from "./favorite_outline.png";
import coracaoCheio from "./favorite.png";
import { useFavoritoContext } from "Contextos/FavoritoContexto";

function Card({ id, titulo, capa, link }) {
    const {favoritos, adicionaOuRemoveFavorito} = useFavoritoContext();
    const verificaSeTaFavoritado = favoritos.find((filme) => filme.id === id);
    return(
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={`Imagem do filme ${titulo}`} />
            </Link>
            <div className={styles.tituloEFavorito}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <img 
                    src={verificaSeTaFavoritado ? coracaoCheio : coracaoVazio} 
                    alt="Ícone de um coração vazio" 
                    onClick={() => adicionaOuRemoveFavorito({ id, titulo, capa, link })} 
                />
            </div>
        </div>
    );
}

export default Card;