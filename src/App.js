import React, {useState} from 'react';
import './App.css';


import "react-bulma-components/dist/react-bulma-components.min.css";
import { Hero ,Container ,Heading} from "react-bulma-components";

//components
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import HeroFooter from './Components/HeroFooter';
import Navbars from './Components/Navbar';
import Landing from './Components/Landing';
import ImageSlider from "./Components/ImageSlider";


function App() {

  const [whichComponentToShow, setComponentToShow]=useState("projects");
  const landingClickHandler = () => {
    setComponentToShow("landing");
  };
   const aboutClickHandler = () => {
    setComponentToShow("about");
  };
   const contactClickHandler = () => {
    setComponentToShow("contact");
  };
   const projectsClickHandler = () => {
    setComponentToShow("projects");
  };

  if(whichComponentToShow === "about"){
     return (
      <div>
   <Hero size="fullheight" color="white">
  <Navbars about={aboutClickHandler} projects={projectsClickHandler
      } contact={contactClickHandler}/>
      <Hero.Body>
     
         <About/>
      </Hero.Body>
  
   </Hero>

</div>
  );
} 





else if(whichComponentToShow === "projects") {
  return (
   <Hero size="fullheight" color="dark">
      <Navbars 
      	about={aboutClickHandler} 
      	projects={projectsClickHandler} 
      	contact={contactClickHandler}/>
          <Hero.Body>
          	<Projects/>
          </Hero.Body>
   </Hero>

  );



} else if(whichComponentToShow === "contact") {
         return (
   <Hero size="fullheight" color="primary">
     <Navbars about={aboutClickHandler} projects={projectsClickHandler
      } contact={contactClickHandler}/>
      <Hero.Body>
         <Contact/>
      </Hero.Body>

   </Hero>

  );

} else if(whichComponentToShow === "landing"){

   return (
   <Hero size="fullheight" id="bglanding">
     <Navbars about={aboutClickHandler} projects={projectsClickHandler
      } contact={contactClickHandler}/>
      <Hero.Body>
      <Landing />

      </Hero.Body>
   </Hero>

  );

  }return null;
}





export default App;
