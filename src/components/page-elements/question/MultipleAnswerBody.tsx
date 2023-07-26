import {Stack,Checkbox} from '@mui/material'
import React from 'react'
import AnswerButton from '../../elements/AnswerButton'
import SubmitBtn from '../../elements/SubmitBtn'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type MultipleAnswerBodyProps = {
	questionData: any
	handleMultiSelect: (answer:string) => void
	selectedAnswers: Array<string> | string[]
	onSuccess: () => void
}
type QuestionDataDto = {
	label: string,
	value: any,
	imgSrc?: string
}

const MultipleAnswerBody = ({questionData, selectedAnswers, onSuccess, handleMultiSelect}:MultipleAnswerBodyProps) => {
	return (
		<Stack direction="column" py={3} gap={2}>
						{questionData.map(({label, value, imgSrc}: QuestionDataDto)=>(
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
						<SubmitBtn
							fullWidth
							variant="contained"
							sx={{textTransform: 'none', fontWeight: 600}}
							onClick={onSuccess}
						>
							Continue
						</SubmitBtn>
					</Stack>
	)
}

export default MultipleAnswerBody