function Noticia(props) {
    const {noticia} = props;
    return(
        <div>
            <h2>{noticia.title}</h2>
            <img src={noticia.urlToImage} alt={noticia.title} />
            <h5>{noticia.author}</h5>
            <p>{noticia.content}</p>
        </div>
    );
}

export default Noticia;
