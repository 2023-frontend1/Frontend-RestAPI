import { css } from 'styled-components'

const alignCenter = css`
	display: flex;
	align-items: center;
`
const alignStart = css`
	display: flex;
	align-items: start;
`
const justifyCenter = css`
	display: flex;
	justify-content: center;
`
const justifyStart = css`
	display: flex;
	justify-content: start;
`

const justifyBetween = css`
	display: flex;
	justify-content: space-between;
`
const flexCenter = css`
	${alignCenter}
	${justifyCenter}
`
const flexStart = css`
	${alignStart}
	${justifyStart}
`
const directionColumn = css`
	display: flex;
	flex-direction: column;
`

const flexAlign = {
	alignCenter,
	alignStart,
	directionColumn,
	flexCenter,
	flexStart,
	justifyBetween,
	justifyCenter,
	justifyStart,
}

export default flexAlign
