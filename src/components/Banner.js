function Banner (props){
    return (
        <div>
            <h1>{props.bannerHeader}</h1>
            <h2>{props.bannerText}</h2>
        </div>
    );

}

export default Banner;