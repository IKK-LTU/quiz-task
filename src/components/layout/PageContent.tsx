import React, { ReactElement } from 'react'
import {useNavigate} from 'react-router-dom'

import { Stack,Button, Typography} from '@mui/material'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import styled from '@emotion/styled'

type PageContentProps = {
	 children: ReactElement
	 pageCountText?: string
	 disableNavbar?: boolean
	 onBack?: () => void
}

const StyledContainer = styled(Stack)`
	display: flex;
	max-height: 100vh;
	width: 100%;
` 
const StyledNavbar = styled(Stack)`
	display: flex;
	justify-content: flex-start;
	align-items:center;
	flex-direction: row;
	flex-grow:1;
	max-height: 80px;
	margin-top: 0;
	height: 72px;
	background: #FFF;
	box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
	padding: 1rem 3rem;
` 

const PageContent = ({children, disableNavbar, onBack, pageCountText}:PageContentProps) => {

	return (
		<StyledContainer>
			{!disableNavbar &&
				<StyledNavbar>
					<Button onClick={() => onBack && onBack()}
						startIcon={<ArrowBackIosRoundedIcon sx={{color:'rgba(170, 0, 255, 1)'}} />}
						disableRipple
						sx={{color: "#000", mr:'auto',fontWeight: 600, fontSize: '14px', textTransform:'none', '&:hover':{background: 'none'}}}
						>
							Back
					</Button>
					{pageCountText &&
					<Typography variant="body2" sx={{color:'#212121'}}>
						{pageCountText}
					</Typography>
					}
				</StyledNavbar>
			}
				{children}
			</StyledContainer>
	)
}

export default PageContent