
import React, { useEffect, useState} from 'react';

import {Stack, LinearProgress, Typography} from '@mui/material'
import styled from '@emotion/styled'

import PageContent from '../components/layout/PageContent';
import Header from '../components/page-elements/question/Header';

type ResultsProps = {
	questionIndex: number
	questionData: any
	pagesCounter:string
	onBack: () => void
}

const StyledContainer = styled(Stack)`
	align-items: center;
	flex-direction: column;
	padding: 4rem 2rem;
` 

const Results = ({questionIndex, questionData, pagesCounter, onBack }: ResultsProps) => {
  const [progress, setProgress] = useState(0);
  const [ results, setResults] = useState<Array<any>>([])

  useEffect(() => {
  handleLoacalStorageResults()

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);


const handleLoacalStorageResults = () => {
 const resultArray:Array<{question: number, answer: Array<string>}> = []

  for (let index = 0; index < questionIndex; index++) {
    const localStorageData = localStorage.getItem(`q${index}`)
    localStorageData && resultArray.push({question: index, answer: JSON.parse(localStorageData) })
  }
  return setResults(resultArray)
}
  return (
    <PageContent pageCountText="Results" onBack={onBack}>
				<StyledContainer>
          <Header title={progress === 100 ? "Answers" :questionData.label} description={questionData.description} />
          {progress === 100 ?
            <Stack >{results.map(({question, answer})=> <Stack direction="row">
              <Typography variant='body1' pr={2}>
                {question}.Question:
              </Typography>
              <Typography variant='body1'>
                 {answer}
              </Typography>
            </Stack>
            )}</Stack>
          : <LinearProgress variant="determinate" sx={{color: 'red', width: '100%', mt: 2}} value={progress} />
          }
        </StyledContainer>
    </PageContent>
  );
}
export default Results