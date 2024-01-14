import Banner from "components/Banner";
import bannerHome from "./banner-home.png";
import Card from "components/Card";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Titulo from "components/Titulo";

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function requisitaApi() {
            const api = await fetch("https://my-json-server.typicode.com/Hekth/cinetag-api/videos");
            const json = await api.json();
            console.log(json);
            setFilmes(json);
        }
        requisitaApi();
    }, []);

    return (
        <>
            <Banner fonteBanner={bannerHome} pagina="home" />
            <Titulo>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Titulo>
            <section className={styles.principal}>
                { 
                    filmes.map((elemento, index) => (
                        <Card 
                            key={`${elemento.titulo}${index}`} 
                            {...elemento}
                        />
                    ))
                }
            </section>
        </>
    );
}

export default Home;