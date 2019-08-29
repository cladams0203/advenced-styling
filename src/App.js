import React from 'react';

import { Button, Alert, Spinner } from 'reactstrap';
import styled from 'styled-components';

const NewButton = styled.button`
  background: blue;
  color: white;
  border: none;
  ${(props) => props.size === 'small' ? 'padding: 20px' : null}
  &:hover {
    opacity: 0.7
  }
`
const OtherBtn = styled(Button)`
color: yellow
`

function App() {
  return (
    <div className="App">
    <NewButton size='small'>Hello</NewButton>
    <NewButton size='medium'>Hello</NewButton>
    <NewButton>Hello</NewButton>
      <Button color='danger'>Danger</Button>
      <OtherBtn>New</OtherBtn>
      <Alert color='danger'>My alert</Alert>
      <Spinner color='danger' size='sm'></Spinner>
    </div>
  );
}

export default App;
