import Nav from "./Nav";
import Button from "./Button";

function Header(props) {
    return (
        <header>
            <h1>Luxury Agency</h1>
            <Nav navLinks={props.navLinks}/>
            <Button className={props.buttonText[3].className} buttonText={props.buttonText[3].text}/>
        </header>
    );
    
}

export default Header;