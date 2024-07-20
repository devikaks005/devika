import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const counter = () => {
  var[count,setcount]=useState(0);
  const inc = () =>{
    console.log("inc clicked");
    setcount(++count)
  };
  const dec =() =>{
    console.log("inc clicked");
    setcount(--count)
  };
  return (
    <div style={{marginLeft: "45%",marginTop:"10%",textAlign :"center"}}>
      <Typography variant='h1' style ={{marginLeft :"5%"}}>
        {count}
        </Typography>
      <br>
      </br>
      <Button variant='contained' color= "success" onClick={inc}>
        +
        </Button>
        &nbsp;&nbsp;
      <Button variant='contained' color="error" onClick={dec}>
        -
        </Button>
    </div>
  )
}

export default counter
