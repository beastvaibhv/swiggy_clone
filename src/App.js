import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/body";
import Footer from "./component/Footer";
import Error from "./component/Error";
import About from "./component/About";
import Cart from "./component/Cart";
import Contacts from "./component/Contact";
import Legal from "./component/Legal";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./component/Shimmer";

//Lazy Loading
// Dynamic Import
// chunking 
// code splitting 
// Dynamic Bundling
// On demand Loading. 
const Instamart = lazy(()=> import("./component/Instamart"));

const AppLayout = () => {
  return (
    <>
      
      <Header />
      
      <Outlet/>
      <Footer />
    </>
  );
};
//creating  routes
const appRouter = createBrowserRouter([
  {path: "/",
   element : <AppLayout/>,
  errorElement : <Error/>,
  children: [
    {
      path:"/about",
      element: <About/>,
    },
    {
      path:"/contacts",
      element: <Contacts/>,
    },
    {
      path:"/cart",
      element: <Cart/>,
    },
    {
    path:"/",
    element: <Body/>,
    },
    {
    path: "/legal",
    element: <Legal/>,
    },
    {
    path:"/restaurant/:resId" ,
    element:<RestaurantMenu/> ,
    },
    {
     path:"/instamart",
     // addinf suspense  so react will wait until the promise is resolved,
     // until instamart loads its component
     element:(<Suspense fallback ={<Shimmer/>}><Instamart/></Suspense>) ,
    },
    
  ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
