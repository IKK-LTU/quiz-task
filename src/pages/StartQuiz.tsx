import React from 'react'

import { Stack, Typography} from '@mui/material'
import styled from '@emotion/styled'

import PageContent from '../components/layout/PageContent'
import Illustration from '../assets/svgs/Illustration'
import SubmitBtn from '../components/elements/SubmitBtn'

const StyledContainer = styled(Stack)`
	height: 100vh;
	align-items: center;
	justify-content: center;
` 

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
							<SubmitBtn
								onClick={onSuccess}
								fullWidth
								sx={{
									mx:{xs:'auto', lg:0},
									maxWidth: 300

								}}
									>
									Start The Quiz
							</SubmitBtn>
				</Stack>
				<Illustration sx={{fontSize:{xs:'400px', md:'640px'}, mt:{xs:2, sm:0}}}/>
			</StyledContainer>
		</PageContent>
	)
}

export default StartQuiz