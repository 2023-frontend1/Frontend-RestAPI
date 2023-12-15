import { createSlice } from '@reduxjs/toolkit'

const issueListSlice = createSlice({
	name: 'IssueList',
	initialState: [],
	reducers: {
		reload: (_, action) => {
			return action.payload
		},
	},
})
export const { reload } = issueListSlice.actions
export default issueListSlice
