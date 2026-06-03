import Button from "./Button";
function Banner (props){
    return (
        <section className="banner">
            <h1>{props.bannerHeader}</h1>
            <h2>{props.bannerText}</h2>
            <div className="banner-actions">
                <Button className={props.buttonText[0].className} buttonText={props.buttonText[0].text}/>
                <Button className={props.buttonText[1].className} buttonText={props.buttonText[1].text}/>
            </div>
        </section>
    );

}

export default Banner;
