import React from 'react'

import {Button, Stack, Typography} from '@mui/material'
import styled from '@emotion/styled'

import PageContent from '../components/layout/PageContent'
import Illustration from '../assets/svgs/Illustration'

const StyledContainer = styled(Stack)`
	height: 100vh;
	align-items: center;
	justify-content: center;
` 

const StyledButton = styled(Button)`
	background: rgba(170, 0, 255, 1);
	text-transform: none;
	font-weight: bold;
` as typeof Button

const StyledTitle = styled(Typography)`
		font-size: 64px;
		font-style: normal;
		font-weight: 600;
		line-height: 56px;
		text-align: center;
`as typeof Typography

type StartQuizProps = {
	onSuccess: () => void
}
const StartQuiz = ({ onSuccess }:StartQuizProps) => {

	return (
		<PageContent disableNavbar>
			<StyledContainer direction={{xs:'column', md:'row'}}>
				<Stack gap={4}>
				<StyledTitle variant="h1" component="h1">Get back in shape.</StyledTitle>
							<StyledButton variant="contained"
								onClick={onSuccess}
								fullWidth
								sx={{
								  height: 48,
									maxWidth:300,
									mx:{xs:'auto', sm:0},
									borderRadius: 2
								}}
									>
									Start The Quiz
							</StyledButton>
				</Stack>
				<Illustration sx={{fontSize:{xs:'400px', md:'640px'}, mt:{xs:2, sm:0}}}/>
			</StyledContainer>
		</PageContent>
	)
}

export default StartQuiz