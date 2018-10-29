export const createProject = project => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make asyn req to db
		dispatch({ type: 'CREATE_PROJECT', project })
	}
}
