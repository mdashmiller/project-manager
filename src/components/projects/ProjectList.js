import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) =>
	<div className="section project-list">
		{ projects && projects.map(project =>
			<ProjectSummary project={project} key={project.id} />
		) }
	</div>

export default ProjectList
