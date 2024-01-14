import { createContext, useContext, useState } from "react";

export const FavoritoContexto = createContext();
FavoritoContexto.displayName = "Favorito";

export default function FavoritoProvider({ children }) {
    const [favoritos, setFavorito] = useState([]);

    return(
        <FavoritoContexto.Provider value={{favoritos, setFavorito}}>
            {children}
        </FavoritoContexto.Provider>
    );
}

/* HOOK PARA USAR O CONTEXT */
/*transportei a função adicionaOuRemoveFavorito para cá como um hook, dessa forma outros componentes poderão acessá-la e torna o componente mais organizado */
/*o interessante é que, dessa forma, nao precisamos importar o context nos componentes, apenas o hook */
export function useFavoritoContext() {
    const {favoritos, setFavorito} = useContext(FavoritoContexto);
    
    function adicionaOuRemoveFavorito({ id, titulo, capa, link }) {
        const verificaSeTaFavoritado = favoritos.find((filme) => filme.id === id);
        /* se o filme já existe então ele vai retirar da lista, caso contrário, irá adicionar */
        const adicionaOuRetiraFavorito = 
            verificaSeTaFavoritado
            ? favoritos.filter((filme) => filme.id !== id)
            : [...favoritos, {id, titulo, capa, link}]
        ;
        
        setFavorito(adicionaOuRetiraFavorito);
    }

    /*o hook deve retornar os itens que serão utilizados nos componentes */
    return {
        favoritos,
        adicionaOuRemoveFavorito
    }
}