import React  from "react";
import Card from "react-bootstrap/Card";

function Project(props) {


	return (
		<Card style={{ width: "18rem" }}>
						
			<div className="center">
				<Card.Body>
				
					<img
					src={require(`../../assets/images/${props.projects.image}`)}
					alt="about-me"
					className="photo"
				/>
					<Card.Title className="card-title">{props.projects.name}</Card.Title>
					<Card.Text className="card-text">{props.projects.description}</Card.Text>
					<Card.Subtitle className="card-subtitle">{props.projects.technologies} </Card.Subtitle>
					<Card.Link href={props.projects.appLink} target="_blank" className="card-link">
						{props.projects.name} App
					</Card.Link>
					<br></br>
					<Card.Link href={props.projects.gitLink} target="_blank" className="card-link">
						{props.projects.Linkname} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;