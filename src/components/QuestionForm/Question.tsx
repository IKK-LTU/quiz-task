import React, {useEffect, useState} from 'react'

import {Stack, Button, Checkbox, Typography, CircularProgress} from '@mui/material'
import styled from '@emotion/styled'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import { MOCK_DATA } from '../../assets/mock-data'
import Title from '../../components/elements/Title'
import AnswerButton from '../../components/elements/AnswerButton';
import PageContent from '../layout/PageContent';


const StyledContainer = styled(Stack)`
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	flex-direction: column;
` 


type QuestionProps = {
	questionIndex: number
	questionData: any
	pagesCounter:string
	onSuccess: () => void
	onBack: () => void
}

const Question = ({questionIndex,pagesCounter, questionData, onSuccess, onBack}:QuestionProps) => {

	const [selectedAnswers, setSelectedAnswers] = useState<Array< string>>([])

	const handleMultiSelect = async (value: string) => {
			const isSelected = selectedAnswers.includes(value)

			if(value === 'none') setSelectedAnswers([value])
			if(!isSelected && selectedAnswers.includes('none')){
				 setSelectedAnswers([value])
			}
			if(!isSelected){
				 setSelectedAnswers(prevVal => [...prevVal, value])
			}
			else{
				 setSelectedAnswers(prevVal => prevVal.filter(answer => answer !== value))
			}
	};


	const handleSelect = async (value: string) => {
		setSelectedAnswers([value])
		onSuccess()
	}

	const handleContinueBtn = () => {
		onSuccess()
	}

console.log("selectedAnswers",selectedAnswers)

const handleLoacalStorage = () => localStorage.setItem(`q${questionIndex - 1}`, JSON.stringify(selectedAnswers))

	useEffect(()=> {
		// const initialValue = localStorage.getItem(`q${questionIndex}`)
		if(selectedAnswers && selectedAnswers.length !== 0) {
			handleLoacalStorage()
		}
	},[questionIndex])

	useEffect(()=> {
		setSelectedAnswers([])

	},[questionIndex])

	
	return (
		<PageContent pageCountText={pagesCounter} onBack={onBack}>
			<>
			{questionData ?
				<StyledContainer>
					<Title text={MOCK_DATA.data.questions[questionIndex].label}/>

					{questionData.description &&
						<Typography variant="body1" py={2}>
							{MOCK_DATA.data.questions[questionIndex].description}
						</Typography>
					}
					{questionData.type === 'single' ?
					<Stack direction="column" py={3} gap={2}>
						{questionData.options &&
						questionData.options?.map(({label, value, imgSrc}:{label:string, value:string,imgSrc?:string})=>(
							<AnswerButton key={value}
								onClick={() => handleSelect(value)}
								endIcon={<ArrowForwardIcon sx={{color:'rgba(170, 0, 255, 1)'}}/>}
							>
								<Stack direction="row" alignItems="center" gap={1}>
									{imgSrc && <img src={imgSrc} alt={value}/>}
									{label}
								</Stack>
							</AnswerButton>
						))}
					</Stack>
						:
						<Stack direction="column" py={3} gap={2}>
						{questionData.options &&
						questionData.options?.map(({label, value, imgSrc}:{label:string, value:string, imgSrc?:string})=>(
							<AnswerButton key={value}
								onClick={() => handleMultiSelect(value)}
								endIcon={ <Checkbox
									disableRipple
									sx={{color:'rgba(170, 0, 255, 1)'}}
									checked={selectedAnswers.includes(value)} 
									icon={<RadioButtonUncheckedIcon/>}
									checkedIcon={<CheckCircleIcon/>}
									/>}
								>
									<Stack direction="row" alignItems="center" gap={1}>
									{imgSrc && <img src={imgSrc} alt={value}/>}
									{label}
									</Stack>
							</AnswerButton>
						))}
						<Button
							fullWidth
							variant="contained"
							sx={{textTransform: 'none', fontWeight: 600}}
							onClick={handleContinueBtn}
						>
							Continue
						</Button>
					</Stack>
					}
				</StyledContainer>
			: <Stack height="100%" width="100%" pt="200px"><CircularProgress sx={{mx:' auto'}}/></Stack>
			}
			</>
		</PageContent>
	)
}

export default Question