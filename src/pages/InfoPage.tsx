import React from 'react'

import {Button, Stack, Typography} from '@mui/material'

import Title from '../components/elements/Title'
import PageContent from '../components/layout/PageContent'
import styled from 'styled-components'
import SubmitBtn from '../components/elements/SubmitBtn'

type InfoPageProps = {
	data: any,
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

const InfoPage = ({data, pagesCounter, onSuccess, onBack}:InfoPageProps) => {
	return (
		<PageContent pageCountText={pagesCounter} onBack={onBack}>
			<StyledContainer>
				<Title text={data.label}/>

				<Typography>{data.description}</Typography>
					{data.imgSrc && <img style={{width: '400px'}} src={data.imgSrc} alt={data.label}/>}
				<Typography>{data.description1}</Typography>

				<Typography>{data.caption}</Typography>

				<SubmitBtn variant="contained" 
					disableRipple
					onClick={onSuccess}
					sx={{width: 300}}
				 >
					{data?.options[0]?.label}
				</SubmitBtn>
			</StyledContainer>
		</PageContent>
	)
}

export default InfoPage