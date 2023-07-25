import React from 'react'

import {Button} from '@mui/material'
import styled from 'styled-components'

 const SubmitBtn = styled(Button)`
	background: rgba(170, 0, 255, 1);
	text-transform: none;
	font-weight: bold;
	height: 48px;
	border-radius: 0.5rem;
	color: white;
	filter: drop-shadow(0px 16px 32px rgba(170, 0, 255, 0.24));
	&:hover{
	background: rgba(170, 0, 255, 0.9);
	}
` as typeof Button

export default SubmitBtn 