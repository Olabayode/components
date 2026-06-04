function Gallery (props){
    return (
        <section className="gallery">
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
