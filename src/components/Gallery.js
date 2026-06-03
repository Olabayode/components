function Gallery (props){
    return (
        <div>
            <ul>
                {props.imageLinks.map(image => (
                    <li key={image.index}>
                        <img src={image.url} alt={image.name}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Gallery;