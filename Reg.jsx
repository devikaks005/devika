import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Reg = (props) => {

  var[val,setval] = useState({
    Name:props.data.Name,
    age:props.data.age,
    place:props.data.place
  })
  
  return (
    <div  style={{marginLeft: "45%",marginTop:"10%",textAlign :"center"}}>
     
    


     <Typography variant='h1'>login page</Typography>
     <br /><br />
     <TextField variant="outlined" label='name'/>
     <br /><br />
     
      <br /><br />
      <TextField variant="outlined" label='email'/>
      <br /><br />
      <TextField variant="outlined" label='father name'/>
      <br /><br />
      <TextField variant="outlined" label='mother name'/>
      <br /><br />
      
    </div>
  )
}

export default Reg
