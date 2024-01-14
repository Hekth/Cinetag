import Banner from "components/Banner";
import bannerFavoritos from "./banner-favoritos.png";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "Contextos/FavoritoContexto";
function Favoritos() {
    const { favoritos } = useFavoritoContext();

    return(
        <>
            <Banner fonteBanner={bannerFavoritos} pagina="favoritos" />
            <Titulo>
                <h1>
                    Meus Favoritos
                </h1>
            </Titulo>
            <section>
                {
                    favoritos.length > 0
                    ? favoritos.map((favorito) => <Card {...favorito} />)
                    : <h2> Você não possui filmes favoritos.</h2>
                }
                
            </section>
        </>
    );
}

export default Favoritos;