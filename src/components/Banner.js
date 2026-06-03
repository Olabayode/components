import Button from "./Button";
function Banner (props){
    return (
        <div>
            <h1>{props.bannerHeader}</h1>
            <h2>{props.bannerText}</h2>
            <div>
                <Button className={props.buttonText[0].className} buttonText={props.buttonText[0].text}/>
                <Button className={props.buttonText[1].className} buttonText={props.buttonText[1].text}/>
            </div>
        </div>
    );

}

export default Banner;