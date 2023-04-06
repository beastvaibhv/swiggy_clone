import {Link} from "react-router-dom";
const Footer = () =>{
    return( <div className="footer">
        <ul className="footerlist">
        <li><Link to="/contacts">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/legal">Legal</Link></li>
    </ul></div>

    );
};

export default Footer;