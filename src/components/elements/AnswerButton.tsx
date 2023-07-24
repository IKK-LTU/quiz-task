import React, {ReactElement} from 'react'

import { Button } from '@mui/material'
import styled from '@emotion/styled'

const StyledButton = styled(Button)`
	border-radius: 8px;
	border: 1px solid rgba(33, 33, 33, 0.16);
	background: #FFF;
	width: 352px;
	max-width: 352px;
	min-height: 56px;
	text-transform: none;
	justify-content: space-between;
	color: black;
	font-weight: 600;
	padding: 1rem;
` as typeof Button

type ArrowButtonProps = {
	children: ReactElement | string
	onClick: () => void
	endIcon?: ReactElement,
	disable?: boolean
}

const AnswerButton = ({children, disable, onClick, endIcon}:ArrowButtonProps) => {
	return (
		<StyledButton 
			onClick={onClick}
			variant="outlined"
			endIcon={endIcon}
			disableRipple
		>
			{children}
		</StyledButton>
	)
}

export default AnswerButton