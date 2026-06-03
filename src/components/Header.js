import Nav from "./Nav";

function Header(props) {
    return (
        <header>
            <h1>Components</h1>
            <Nav navLinks={props.navLinks}/>
        </header>
    );
    
}

export default Header;