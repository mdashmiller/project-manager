import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) =>
	<div className="section project-list">
		{ projects && projects.map(project =>
			<Link to={'/project/' + project.id}>
				<ProjectSummary project={project} key={project.id} />
			</Link>
		) }
	</div>

export default ProjectList
