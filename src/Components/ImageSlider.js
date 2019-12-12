import React, { useState } from "react";
import { Button, Box } from "react-bulma-components";
const ImageSlider = props => {
	const images = [
		
		"/images/bilog.jpeg",
		"/images/biz.jpeg",
		"/images/ocean.jpg"
	];

	const [index, setIndex] = useState(0);
	console.log("the array length of images is: " + images.length);
	const nextImageHandler = () => {
		// setIndex(index + 1);
		if (index === images.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
		console.log(index);

		//ternary operator
		//condition to be checked ? true : false
		// condition ? if else
		/* 
		if(index === images.length -1){
			true
			setIndex(0)

		}else {
		false
		setIndex(index-1)
		}

		*/
		// index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
	};
	const previousImageHandler = () => {
		// setIndex(index - 1);

		if (index === 0) {
			setIndex(images.length - 1);
		} else {
			setIndex(index - 1);
		}

		console.log(index);
	};

	return (
		<div>
			<h2>Casts</h2>
			<img
				style={{
					width: "200px",
					height: "400px"
				}}
				src={images[index]}
				alt="react carousel"
			/>
		
			<div>
				<Button
					onClick={previousImageHandler}
					color="dark"
					outlined={true}
				>
					Previous
				</Button>
				<Button
					onClick={nextImageHandler}
					color="primary"
					outlined={false}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default ImageSlider;
