function Banner({ pagina, fonteBanner }) {
    return(
        <div>
            <img src={fonteBanner} alt={`Banner da página ${pagina}`} width="100%" />
        </div>
    );
}

export default Banner;