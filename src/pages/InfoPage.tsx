import React from 'react'

import {Button, Stack, Typography} from '@mui/material'

import Title from '../components/elements/Title'
import PageContent from '../components/layout/PageContent'
import styled from 'styled-components'

type InfoPageProps = {
	data: any,
	pagesCounter: string
	onSuccess: () => void
	onBack: () => void
}

const StyledContainer = styled(Stack)`
	height: 100vh;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	max-widht: 544px;
	padding: 3rem 0;
` 
const StyledButton = styled(Button)`
	width: 352px;
	text-transform: none;
	background: rgba(170, 0, 255, 1);
	font-weight: 600;
` 

const InfoPage = ({data, pagesCounter, onSuccess, onBack}:InfoPageProps) => {
	return (
		<PageContent pageCountText={pagesCounter} onBack={onBack}>
			<StyledContainer>
				<Title text={data.label}/>

				<Typography>{data.description}</Typography>
					{data.imgSrc && <img style={{width: '400px'}} src={data.imgSrc} alt={data.label}/>}
				<Typography>{data.description1}</Typography>

				<Typography>{data.caption}</Typography>

				<StyledButton variant="contained" 
					disableRipple
					onClick={onSuccess}
				 >
					{data?.options[0]?.label}
				</StyledButton>
			</StyledContainer>
		</PageContent>
	)
}

export default InfoPage