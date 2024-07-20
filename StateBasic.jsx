import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    var[name,setName]= useState("tiya");
    var[data,setData]=useState();
    const inputHandler = (e)=>{
      console.log(e.target.value);
      setName(e.target.value);
    };
    const changeName = () =>{
      console.log("btn clicked");
      setData(name)
    };
  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
     <Typography variant='h3'>Hello{name}</Typography>
     <br />
     <TextField variant='outlined' onChange={inputHandler}/>
     <br /><br />
     <Button variant='outlined' onChange={inputHandler} />
     <br />
     
    </div>
  )
}

export default StateBasic
