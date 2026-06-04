function Gallery (props){
    return (
        <section className="gallery">
            <h1>Gallery</h1>
            <ul className="gallery-list">
                {props.imageLinks.map(image => (
                    <li key={image.index}>
                        <img src={image.url} alt={image.name}/>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Gallery;
