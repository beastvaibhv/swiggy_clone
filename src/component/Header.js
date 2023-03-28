import {useState} from "react";

const Title=()=>(
    <div className="Title">
<img className="logo" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/twiggy-pictured-in-this-october-1966-shoot-for-the-mirror-news-photo-1648717385.jpg?crop=0.464xw:0.388xh;0.286xw,0.117xh&resize=980:*" alt="Twiggy" />
<h3>Twiggy</h3>
</div>
);



const Header = () => {
  const [login, setLogin] = useState(false);
  return (

    <div className="Header">
        <Title/>
      
      
      <ul className="Nav">
        <li>Home</li>
        <li>Offers</li>
        <li>Cart</li>
        <li>About</li>
        <li>Account</li>
        { (login)?<button onClick={()=>setLogin(false)}>Log in</button>: <button onClick={()=>setLogin(true)}> Log out</button> }
        <button onClick={()=>{
          if(login) setLogin(false)
          else setLogin(true)
        }}> {(login)? "Log in":"Log out"}</button>
      </ul>
    </div>
  );
};

export default Header;