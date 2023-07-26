import React, {useEffect, useState} from 'react'

import {Stack, CircularProgress} from '@mui/material'
import styled from '@emotion/styled'


import PageContent from '../components/layout/PageContent';
import Header from '../components/page-elements/question/Header';
import SingleAnswerBody from '../components/page-elements/question/SingleAnswerBody';
import MultipleAnswerBody from '../components/page-elements/question/MultipleAnswerBody';


const StyledContainer = styled(Stack)`
	align-items: center;
	flex-direction: column;
	padding: 4rem 2rem;
` 

type QuestionProps = {
	questionIndex: number
	questionData: any
	pagesCounter:string
	onSuccess: () => void
	onBack: () => void
}

const Question = ({questionIndex, pagesCounter, questionData, onSuccess, onBack}:QuestionProps) => {

	const [selectedAnswers, setSelectedAnswers] = useState<Array<string> | string[]>([])

	const handleMultiSelect = async (value: string) => {
			const isSelected = selectedAnswers.includes(value)

			if(value === 'none') {
				const newAnswers = [value]
				handleLoacalStorage([value])
				return setSelectedAnswers(newAnswers)
			}

			if(!isSelected && selectedAnswers.includes('none')){
				handleLoacalStorage([value])
				return setSelectedAnswers([value])
			}

			if(!isSelected){
				return setSelectedAnswers(prevVal => {
					const newAnswers = [...prevVal, value]
					handleLoacalStorage(newAnswers)
					return [...prevVal, value]
				})
			}
			else {
				return setSelectedAnswers(prevVal =>{
					const newAnswers =  prevVal.filter(answer => answer !== value)
					handleLoacalStorage(newAnswers)
					return newAnswers
				 })
			}
	};

	const handleSelect = (value: string) => {
		handleLoacalStorage([value])
		setSelectedAnswers([value])
		onSuccess()
	}

const handleLoacalStorage = (value: Array<string> | string[]) => localStorage.setItem(`q${questionIndex}`, JSON.stringify(value))

	useEffect(()=> {
			setSelectedAnswers([])
	},[questionIndex])

	
	return (
		<PageContent pageCountText={pagesCounter} onBack={onBack}>
			<>
			{questionData ?
				<StyledContainer>
					<Header title={questionData.label} description={questionData.description} />
					
					{questionData.type === 'single' ?
						<SingleAnswerBody
						 questionData={questionData.options} 
						 handleSelect={handleSelect} 
						/>
						:
						<MultipleAnswerBody 
							questionData={questionData.options}
						 	selectedAnswers={selectedAnswers}
							handleMultiSelect={handleMultiSelect}
							onSuccess={onSuccess}
						/>
					}
				</StyledContainer>
			: <Stack height="100%" width="100%" pt="200px">
					<CircularProgress sx={{mx:' auto'}}/>
				</Stack>
			}
			</>
		</PageContent>
	)
}

export default Question