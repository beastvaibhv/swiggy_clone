import Section from "./Section";
import {useState} from "react";


const sectionData = [
    {title: "About ",
      description:"React web application that allows users to browse through a menu of food items, select their desired items, and place an order for delivery or pickup. The app is built using modern web development tools and frameworks Parcel as the bundler, Tailwind CSS for styling,the Redux library for state management, and the React Router library for handling navigation.The app features a config-driven UI and has been optimized using lazy loading. The app utilizes Jest as its testing framework, including unit tests, integration tests, and performance tests."},
      {title: "Technology and Frameworks Used",
      description:"We have created our own create react app using parcel as bundler, babel as transpiler/compiler, react-router dom for path routing, redux to save context, tailwindcss as a css library, and jest as test library"},
      {title: "About Developer",
      description:"Hi Vaibhav here, I am a  react frontend developer, and this Food ordering clone app is one of my starting frontend project. In this project I have tried to write simple, understandable, and good code. Hope you have liked it."}
]

const About = () =>{
    const [selected, setSelected] = useState(null);
    const handleToggle =(k)=>{
        if (k === selected) setSelected(null);
        setSelected(k);
  };
    
return(
    <div>
   {sectionData.map(({title,description}, index)=>{
    return(
     <Section title = {title} description={description} handleToggle={handleToggle} selected={selected} k={index} key={index}/>
    )
   })}
  


    </div>
)
};
export default About;