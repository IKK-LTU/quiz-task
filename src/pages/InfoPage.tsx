import React from 'react'

import {Stack, Typography} from '@mui/material'

import Title from '../components/elements/Title'
import PageContent from '../components/layout/PageContent'
import styled from 'styled-components'
import SubmitBtn from '../components/elements/SubmitBtn'

type InfoPageProps = {
	questionData: any,
	pagesCounter: string
	onSuccess: () => void
	onBack: () => void
}

const StyledContainer = styled(Stack)`
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	max-widht: 544px;
	padding: 4rem 1rem;
` 

const InfoPage = ({questionData, pagesCounter, onSuccess, onBack}:InfoPageProps) => {
	return (
		<PageContent pageCountText={pagesCounter} onBack={onBack}>
			<StyledContainer>
				<Title text={questionData.label}/>

				<Typography>{questionData.description}</Typography>
					{questionData.imgSrc && <img style={{width: '400px'}} src={questionData.imgSrc} alt={questionData.label}/>}
				<Typography>{questionData.description1}</Typography>

				<Typography>{questionData.caption}</Typography>

				<SubmitBtn variant="contained" 
					disableRipple
					onClick={onSuccess}
					sx={{width: 300}}
				 >
					{questionData?.options[0]?.label}
				</SubmitBtn>
			</StyledContainer>
		</PageContent>
	)
}

export default InfoPage