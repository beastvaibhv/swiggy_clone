import {useState} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title=()=>(
    <div className="flex">
<Link to= "/"><img  className= "h-10 p-2" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/twiggy-pictured-in-this-october-1966-shoot-for-the-mirror-news-photo-1648717385.jpg?crop=0.464xw:0.388xh;0.286xw,0.117xh&resize=980:*" alt="Twiggy" /></Link>
<h3 className="m-1 p-1 font-bold"><Link to="/"> Twiggy </Link></h3>
</div>
);



const Header = () => {
  const [login, setLogin] = useState(false);
  const isOnline = useOnline();
  return (

    <div className="flex justify-between bg-purple-700 p-1 h-13">
        <Title/>
      
    
    
      <ul className="flex justify-normal m-2">
        <li className="p-1 hover:underline font-semibold"><Link to="/instamart">Instamart</Link></li>
        <li className="p-1 hover:underline font-semibold"><Link to="/">Home</Link></li>
        <li className="p-1 hover:underline font-semibold"><Link to="/about">About</Link></li>
        <li className="p-1 hover:underline font-semibold"><Link to ="/contacts">Contact Us</Link></li>
        <li className="p-1 hover:underline font-semibold"> <Link to ="/cart">Cart</Link></li>
        <li className="p-1  font-semibold">{(isOnline)?"🟢":"🔴" }</li>
        
        { /*(login)?<button onClick={()=>setLogin(false)}>Log in</button>: <button onClick={()=>setLogin(true)}> Log out</button> */ }
        <button className="rounded-lg px-3  bg-purple-900 text-gray-100 hover:bg-gray-700 duration-300 " onClick={()=>{
          if(login) setLogin(false)
          else setLogin(true)
        }}> {(login)? "Log in":"Log out"}</button>
      </ul>
    </div>
  );
};

export default Header;