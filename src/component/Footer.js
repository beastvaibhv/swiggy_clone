import {Link} from "react-router-dom";
const Footer = () =>{
    return( <div className="bg-purple-900">
        <ul className="flex flex-row justify-center items-center">
        <li className="px-2 py-1 hover:underline font-semibold"><Link to="/contacts">Contact Us</Link></li>
        <li className="px-2 py-1 hover:underline font-semibold"><Link to="/about">About</Link></li>
        <li className="px-2 py-1 hover:underline font-semibold"><Link to="/legal">Legal</Link></li>
    </ul></div>

    );
};

export default Footer;