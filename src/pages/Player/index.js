import Banner from "components/Banner";
import bannerPlayer from "./banner-player.png";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import Video from "components/Video";
import NaoEncontrada from "pages/NaoEcontrada";
import { useEffect, useState } from "react";

function Player() {
    const [filme, setFilme] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Hekth/cinetag-api/videos?id=${id}`)
        .then((response) => response.json())
        .then((json) => setFilme(...json));
    }, [id]);
    
    if (!filme) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner pagina="player" fonteBanner={bannerPlayer} />
            <Titulo>
                <h1>
                    Player
                </h1>
            </Titulo>
            <Video src={ filme.link } titulo={ filme.titulo } />
        </>
    );
}

export default Player;