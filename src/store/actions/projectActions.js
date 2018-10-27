export const createProject = project => {
	return (dispatch, getState) => {
		// make asyn req to db
		dispatch({ type: 'CREATE_PROJECT', project })
	}
}
