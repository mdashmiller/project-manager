const initState = {
	projects: [
		{id:'1', title: 'Get Sonic', content: 'Set up an elaborate obstacle course with a killer robot at the end' }
		{id:'2', title: 'Sabotage Mission', content: 'Disable cryogenic systems to eleminate all shuttle crew' }
		{id:'3', title: 'Kill All Humans', content: 'Join the League of Robots in cleansing the planet of human vermin' }
	]
}

const projectReducer = (state = initState, action) => {
	return state
}

export default projectReducer
