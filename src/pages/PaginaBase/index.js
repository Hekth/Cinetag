import Container from "components/Container";
import Header from "components/Header";
import FavoritoProvider from "Contextos/FavoritoContexto";
import Rodape from "components/Rodape";
const { Outlet } = require("react-router-dom");

function PaginaBase() {
    /*retirando a responsabilidade do browser router de renderizar componentes e renderizar apenas as rotas */
    return (
        <main>
            <Header />
            {/* para manter o mesmo estilo de layout da section que renderiza os cards em todas as paginas */}
            <Container>
                <FavoritoProvider>
                    {/*outlet é como se fosse o elemento filho a ser renderizado de uma rota pai*/}
                    <Outlet />
                </FavoritoProvider>
            </Container>
            <Rodape mensagem="Desenvolvido por Heitor da Costa" />
        </main>
    );
}

export default PaginaBase;