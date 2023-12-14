import { configureStore } from '@reduxjs/toolkit'
import IssueListSlice from '../slice/IssueListSlice'

const Store = configureStore({
	reducer: { IssueList: IssueListSlice.reducer },
})

export default Store
