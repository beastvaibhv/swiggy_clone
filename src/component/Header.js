import {useState} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title=()=>(
    <div className="Title">
<Link to= "/"><img className="logo" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/twiggy-pictured-in-this-october-1966-shoot-for-the-mirror-news-photo-1648717385.jpg?crop=0.464xw:0.388xh;0.286xw,0.117xh&resize=980:*" alt="Twiggy" /></Link>
<h3><Link to="/"> Twiggy </Link></h3>
</div>
);



const Header = () => {
  const [login, setLogin] = useState(false);
  const isOnline = useOnline();
  return (

    <div className="Header">
        <Title/>
      
      
      <ul className="Nav">
        <li><Link to="/instamart">Instamart</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to ="/contacts">Contact Us</Link></li>
        <li> <Link to ="/cart">Cart</Link></li>
        <li>{(isOnline)?"🟢":"🔴" }</li>
        
        { /*(login)?<button onClick={()=>setLogin(false)}>Log in</button>: <button onClick={()=>setLogin(true)}> Log out</button> */ }
        <button onClick={()=>{
          if(login) setLogin(false)
          else setLogin(true)
        }}> {(login)? "Log in":"Log out"}</button>
      </ul>
    </div>
  );
};

export default Header;