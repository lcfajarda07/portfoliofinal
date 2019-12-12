import React from "react";
import {Columns,Card,Button,Media,Item,Heading,Image,Content,Modal,OpenModal,Container,Section} from "react-bulma-components";




const Projects = props => {
return(
<Container className="has-text-centered">
 <Columns>
      <Columns.Column size={4} xs={12} md={6}>
            <Card id="proj">
      <Card.Image size="4by3" src="/images/capstone2.png"/>
        
      <Card.Content>
        <Media>
         <h3><strong></strong></h3>
       
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
   
        </Content>
        <div class="buttonproj">
        <Button>Visit my website</Button>
        </div>
      </Card.Content>
    </Card>
      </Columns.Column>

      <Columns.Column size={4} xs={12} md={6}>
     <Card id="proj">
      <Card.Image size="4by3" src="/images/capstone2.png"/>
        
      <Card.Content>
        <Media>
         <h3><strong></strong></h3>
       
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
   
        </Content>
        <div class="buttonproj">
        <Button>Visit my website</Button>
        </div>
      </Card.Content>
    </Card>
      </Columns.Column>


      <Columns.Column size={4} xs={12} md={6}>

     <Card id="proj">
      <Card.Image size="4by3" src="/images/capstone2.png"/>
        
      <Card.Content>
        <Media>
         <h3><strong></strong></h3>
       
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
   
        </Content>
        <div class="buttonproj">
        <Button>Visit my website</Button>
        </div>
      </Card.Content>
    </Card>

      </Columns.Column>
    </Columns>
</Container>
	);
};



export default Projects;