import React from "react";
import { Hero,Container,Heading,Columns,Button} from "react-bulma-components";
import { Link } from "react-scroll";



const Landing = () => {
 return (
 <Hero size="fullheight" id="bglanding">
    <Container className="has-text-centered">
        <Columns>
        {/* left side */}
          <Columns.Column>
         <Heading size={1}>
         
          <div class="typewriter">
          <h1>Hello World</h1>
           <h1> My name is </h1>
           <h1>Lemuel C. Fajarda.</h1> 
           <h1>I am a</h1>
            <h2>
            Full Stack Developer</h2>

         </div>
          <Button>     <Link
          activeClass="active"
           to="aboutcontainer"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            About
            </Link></Button>
         
            </Heading>
            <div class="ics">
            <i id="i1" class="devicon-facebook-plain"></i>
            <i id="i1" class="devicon-twitter-plain"></i>
            <i id="i1" class="devicon-google-plain"></i>
             <h2 class="connect">Connect with me</h2>
            </div>


             
          </Columns.Column>
      
          <Columns.Column>
       

           <div>
       
           <Heading size={2}>
         
          </Heading>
           </div>
          </Columns.Column>
        </Columns>
        </Container>
  </Hero>
	);
};


export default Landing;
