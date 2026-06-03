import Button from "./Button";
function Footer(props){
    return(
        <>
            <h2>CopyRight</h2>
            <Button className={props.buttonText[2].className} buttonText={props.buttonText[2].text}/>
        </>
    );
}

export default Footer;