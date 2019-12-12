import React from "react";
import {Content,Hero,Container,Columns, Heading} from "react-bulma-components";


const Contact = () => {
return(



 <Container className="has-text-centered" id="contactcontainer">
 <Content id="colors">
          <Heading size={5}>
          <h1 className="myproj">Contact Me</h1>
            </Heading>
       
        </Content>


        <Columns>
    		{/* left side */}
        	<Columns.Column>

        		<form>
        			<div className="field">
        				<label  for="name" className="label has-text-light">Name</label>
        				<input id="name" className="input" type="text" />
        			</div>
        			<div className="field">
        				<label for="email" className="label has-text-light">Email</label>
        				<input id="email" className="input" type="text" />
        			</div>

        			<div className="field">
        				<label  className="label has-text-light">message</label>
        					<div classname="control">
        						<textarea id="message" className="textarea" placeholder="Input message here"></textarea>
        					</div>
        			</div>
        			<button className="button is-dark is-fullwidth">Send</button>

        		</form>
       		</Columns.Column>
      
        	<Columns.Column>
        	 		<iframe 
		       		id="gmap"
		       		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4101322928072!2d121.04148921518225!3d14.632645089782072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7afe6a39331%3A0xd367e6dc5e274032!2sCaswynn%20Building%2C%20134%20Timog%20Ave%2C%20Diliman%2C%20Quezon%20City%2C%201103%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1574220892862!5m2!1sen!2sph"
		       		frameborder="0"
		       		style={{ border:0 }}
		       		allowfullscreen="">
       		    </iframe>
        	</Columns.Column>
        </Columns>
        </Container>

	);
};

export default Contact;