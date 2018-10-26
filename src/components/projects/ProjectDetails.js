import React from 'react'

const ProjectDetails = props => {
	const id = props.match.params.id
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo expedita itaque vel velit placeat consequuntur dicta recusandae minima, porro, magnam eius delectus nesciunt ut est cumque cupiditate fugiat laudantium earum.
					</p>	
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Robo Robo</div>
					<div>7th October, 11am</div>
				</div>
			</div>
		</div>
	)
}
	
export default ProjectDetails
