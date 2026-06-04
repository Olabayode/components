import Button from "./Button";
function Footer(props){
    return(
        <footer>
            <div className="footer-main">
                <div className="footer-brand">
                    <h2>Luxury Agency</h2>
                    <p>Stories, updates, and highlights from the cast and fans.</p>
                </div>

                <div className="footer-column">
                    <h3>Explore</h3>
                    <p>About</p>
                    <p>Blogs</p>
                    <p>Team</p>
                </div>

                <div className="footer-column">
                    <h3>Contact</h3>
                    <p>hello@luxagency.com</p>
                    <p>Winnipeg, Canada</p>
                    <p>Mon - Fri, 9am - 5pm</p>
                </div>

                <div className="footer-subscribe">
                    <p>Subscribe to our newsletter</p>
                    <Button className={props.buttonText[2].className} buttonText={props.buttonText[2].text}/>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Luxury Agency. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
