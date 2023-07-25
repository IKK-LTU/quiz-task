import React, { useEffect, useState, VFC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configStore } from './state/store';
import StartQuiz from './pages/StartQuiz';
import InputPage from './pages/InputPage';
import Question from './pages/Question'
import InfoPage from './pages/InfoPage';

import './index.css'
import MockApi from './apis/api';
const { store, persistor } = configStore();



const App: VFC = () => {

  const [fetchedData, setFetchedData] = useState<any>(0)
	const [error, setError] = useState<string>('')

	const [questionIndex, setQuestionIndex] = useState<number>(0)

  const handleNext = () => {
    setQuestionIndex(prevIndex => prevIndex + 1)
  }
  const handleBack = () => {
    setQuestionIndex(prevIndex => prevIndex - 1)
  }

  useEffect(()=> {
		fakeMockFetch()
	},[])


  const fakeMockFetch = () => MockApi()
	.then((resp:any) => setFetchedData(resp))
	.catch(() => setError("Fetch failed"))

	const pagesCounter = `${questionIndex}/${fetchedData?.data?.questions?.length}`


  const resolvePage = () => {
    const type = fetchedData?.data?.questions[questionIndex - 1]?.type
    const questionData = fetchedData?.data?.questions[questionIndex - 1]

   switch(type) {
      case 'single':
        return <Question pagesCounter={pagesCounter} questionIndex={questionIndex -1} questionData={questionData} onSuccess={handleNext} onBack={handleBack} /> 
      case 'multiple':
        return<Question pagesCounter={pagesCounter} questionIndex={questionIndex -1} questionData={questionData} onSuccess={handleNext} onBack={handleBack} /> 
      case 'info':
        return <InfoPage pagesCounter={pagesCounter} data={questionData} onSuccess={handleNext} onBack={handleBack} /> 
      case 'input':
        return <InputPage pagesCounter={pagesCounter} data={questionData} onSuccess={handleNext} onBack={handleBack} />
      default:
       return <StartQuiz onSuccess={handleNext} />
    }}
  

  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <>
        {fetchedData?.data?.questions 
          && resolvePage()
        }
      </>

    </PersistGate>
  </Provider>
)};



export default App;
