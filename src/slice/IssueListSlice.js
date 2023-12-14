import { createSlice } from '@reduxjs/toolkit'

const issueListSlice = createSlice({
	name: 'IssueList',
	initialState: [],
	reducers: {
		getIssues: (state, action) => {
			return action.payload
		},
	},
})
export const { getIssues } = issueListSlice.actions
export default issueListSlice
