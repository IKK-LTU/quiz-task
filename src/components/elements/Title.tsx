import React from 'react'

import { Typography } from '@mui/material'
import styled from '@emotion/styled'

type TitleProps = {
	text: string
}

const StyledTitle = styled(Typography)`
		font-size: 40px;
		font-style: normal;
		font-weight: 600;
		line-height: 56px; 
		text-align: center;

`as typeof Typography


const Title = ({text}:TitleProps) => 
		<StyledTitle variant="h2" component="h1">{text}</StyledTitle>

export default Title 