import React, { useState } from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import './App.css';


export default function App() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num+1);
  }
  const decNum = () => {
    if(num > 0)
      setNum(num-1);
  }

  return (
    <>
      <Grid centered columns={4}>

        <Grid.Column>
        <div className='main-div'>
          <h1 style={{textAlign: 'center'}}> Count </h1>
          <h1 style={{textAlign: 'center'}}> {num} </h1>
            <div className='btn-div'>
              <Button onClick={incNum} color='green'> Increment </Button>
              <Button onClick={decNum} color='red'> Decrement </Button>
            </div>
        </div>
        <p>Done by - Vivek Kumar, Registration No- 12007412</p>

        </Grid.Column>
      </Grid>
    </>
  )
}
