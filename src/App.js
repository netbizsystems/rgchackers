import React from 'react';
import Button from '@mui/material/Button';

function App() {
  const value = 'RGC Hackers';
  return <>
  <div>Hello {value}</div>
  <Button variant="contained" color="primary">Hello World</Button>
  <Button variant="outlined" color="secondary">Hello World</Button>
  <Button variant="contained" color="error">Hello World</Button>
  <Button variant="outlined" color="warning">Hello World</Button>
  <Button variant="contained" color="info">Hello World</Button>
  <Button variant="outlined" color="success">Hello World</Button>
  <Button variant="contained" color="default">Hello World</Button>
  <img src="http://rockportgolf.com/wp-content/uploads/2019/05/rgc_logo.png" 
    width="100" 
    height="100" 
    alt="Rockport Golf Club" id="logo">      
  </img>
  </>;
}

export default App;
