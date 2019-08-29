import React, { useState, useEffect} from 'react';
import { ApiCall } from './components/ApiCall';
import { ImgCarousel } from './components/ImgCarousel';


// import { Button, Alert, Spinner } from 'reactstrap';
// import styled from 'styled-components';

// const NewButton = styled.button`
//   background: blue;
//   color: white;
//   border: none;
//   ${(props) => props.size === 'small' ? 'padding: 20px' : null}
//   &:hover {
//     opacity: 0.7
//   }
// `
// const OtherBtn = styled(Button)`
// color: yellow
// `

const newDate = new Date();
let startDate = []
const dateConstruct = (dateinput) => {
  const dates = [{date: `${dateinput.getFullYear()}-${dateinput.getMonth()+1}-${dateinput.getDate()}`},
    {date:  `${dateinput.getFullYear()}-${dateinput.getMonth()+1}-${dateinput.getDate()-1}`},
    {date:  `${dateinput.getFullYear()}-${dateinput.getMonth()+1}-${dateinput.getDate()-2}`}]
    startDate = dates
}
dateConstruct(newDate)

function App() {
  const [date, setDate] = useState(startDate)
  const [data, setData] = useState([])
  
 
  
  useEffect(() => {
    setData(ApiCall(date))
  }, [date])
  return (
    <div className="App">
    <ImgCarousel imgData={data} />

    {/* <NewButton size='small'>Hello</NewButton>
    <NewButton size='medium'>Hello</NewButton>
    <NewButton>Hello</NewButton>
      <Button color='danger'>Danger</Button>
      <OtherBtn>New</OtherBtn>
      <Alert color='danger'>My alert</Alert>
      <Spinner color='danger' size='sm'></Spinner> */}
    </div>
  );
}

export default App;
