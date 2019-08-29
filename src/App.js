import './App.css'
import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import { ApiCall } from './components/ApiCall';
import { ImgCarousel } from './components/ImgCarousel';
import { DateInput } from './components/DateInput';


const newDate = new Date();
let startDate = []
const dateConstruct = (dateinput) => {
  const dates = [{date: `${dateinput.getFullYear()}-${dateinput.getMonth()+1}-${dateinput.getDate()}`},
    {date:  `${dateinput.getFullYear()}-${dateinput.getMonth()+1}-${dateinput.getDate()-1}`},
    {date:  `${dateinput.getFullYear()}-${dateinput.getMonth()+1}-${dateinput.getDate()-2}`}]
    startDate = dates
}
dateConstruct(newDate)

const ContainerDiv  = styled.div `
margin: 0 auto;
display:  flex;
flex-wrap: wrap;
justify-content: center;
`
const Heading = styled.h1 `
font-size: 4rem;
color: black;
font-weight: bold;
text-shadow: 5px 5px 5px black;
`


function App() {
  const [date, setDate] = useState(startDate)
  const [data, setData] = useState([])
  console.log(date)
 
  
  useEffect(() => {
    setData(ApiCall(date))
  }, [])

  return (
    <div className="App">
      <Heading>Nasa Photo of the Day!</Heading>
      <DateInput newDate={dateConstruct} />
      <ContainerDiv>
      <ImgCarousel imgData={data} />

    {/* <NewButton size='small'>Hello</NewButton>
    <NewButton size='medium'>Hello</NewButton>
    <NewButton>Hello</NewButton>
      <Button color='danger'>Danger</Button>
      <OtherBtn>New</OtherBtn>
      <Alert color='danger'>My alert</Alert>
      <Spinner color='danger' size='sm'></Spinner> */}
      </ContainerDiv>
    </div>
    
  );
}

export default App;
