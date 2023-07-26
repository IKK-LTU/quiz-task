import {Stack} from '@mui/material'
import React from 'react'
import AnswerButton from '../../elements/AnswerButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type SingleAnswerBodyProps = {
	questionData: any
	handleSelect: (answer:string) => void
}
const SingleAnswerBody = ({questionData, handleSelect}: SingleAnswerBodyProps) => {
	return (
		<Stack direction="column" py={3} gap={2}>
			{questionData.map(({label, value, imgSrc}:{label:string, value:string,imgSrc?:string})=>(
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
	)
}

export default SingleAnswerBody