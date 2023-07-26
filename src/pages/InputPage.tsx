import React, { useState} from 'react'

import {Stack, Button, TextField} from '@mui/material'
import styled from '@emotion/styled'
import Title from '../components/elements/Title'
import PageContent from '../components/layout/PageContent'


const StyledContainer = styled(Stack)`
	height: 100vh;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
` 
const StyledTextField = styled(TextField)`
	width: 352px;
	height: 56px;
` 

const StyledButton = styled(Button)`
	border-radius: 8px;
	border: 1px solid rgba(33, 33, 33, 0.16);
	background: #FFF;
	width: 352px;
	max-width: 352px;
	min-height: 56px;
	text-transform: none;
	color: black;
	font-weight: 600;
	padding: 0 1rem;
` as typeof Button



type InfoPageProps = {
	questionData?: any,
	pagesCounter: string
	questionIndex: number
	onSuccess: () => void
	onBack: () => void
}

const InputPage = ({questionData,questionIndex, pagesCounter, onSuccess, onBack}:InfoPageProps) => {
const [age, setAge] = useState<Number>(0)

const handleLoacalStorage = (value: Array<string> | string[]) => localStorage.setItem(`q${questionIndex}`, JSON.stringify(value))

	const handleChange = (event:any) => {
		setAge(event.target.value)
		handleLoacalStorage([event.target.value])
	}

	return (
		<PageContent pageCountText={pagesCounter} onBack={onBack}>
			<StyledContainer>
				<Title text={questionData.label}/>
				<StyledTextField id={questionData.key} placeholder={questionData.key} type="number" label="Age" variant="outlined" onChange={handleChange} />
				<StyledButton onClick={onSuccess} disabled={!age || age < 0} >
					Next
				</StyledButton>
			</StyledContainer>
		</PageContent>

	)
}

export default InputPage