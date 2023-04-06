import { useState, useEffect } from "react";

const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(true);
    const handleOnline = ()=>{
        setIsOnline(true);

        }; 
    const handleOffline = ()=>{
        setIsOnline(false);
        };
    useEffect(()=>{
        
        // adding event listenr to check whether the user is online
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        
       // it is a good practice to remove event listener 
       return ()=>  {

        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
        };


    }, [])

    return isOnline;


};
export default useOnline;