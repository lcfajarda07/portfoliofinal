import React, {useState} from "react";
import {Hero,Tabs} from "react-bulma-components";


const HeroFooter = props => {
	console.log(props);
	//hooks
	const [visible, setVisible] = useState(false);
	const [about, setAbout] =useState(false);
	const [projects, setProjects] =useState(false);
	const [contact, setContact] =useState(false);

	const aboutClickHandler = () =>{
		console.log("you clicked the about tab");
		setVisible(true);
		setAbout(true);
		setProjects(false);
		setContact(false);
		props.about();
	};
	const projectsClickHandler = () =>{
		console.log("you clicked the projects tab");
		setVisible(true);
		setAbout(false);
		setProjects(true);
		setContact(false);
		props.projects();
	};
	const contactClickHandler = () =>{
		console.log("you clicked the contact tab");
		setVisible(true);
		setAbout(false);
		setProjects(false);
		setContact(true);
		props.contact();
	};

return(

 	<Hero.Footer>
 		<Tabs fullwidth={true} className="is-boxed">
 		<Tabs.Tab active={visible && about ? true : false}
 		 onClick={aboutClickHandler}> About Me </Tabs.Tab>

 		<Tabs.Tab active={visible && projects ? true : false}
 		 onClick={projectsClickHandler}>Projects </Tabs.Tab>

 		<Tabs.Tab active={visible && contact ? true : false}
 		 onClick={contactClickHandler}>Contact</Tabs.Tab>
 		</Tabs>
 	</Hero.Footer>

	);
};

export default HeroFooter;