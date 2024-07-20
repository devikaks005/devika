import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var[data,setData]=useState("click the button");
    const home = ()=> {
        console.log("home");
        setData("Home")
    };
    const gallery = ()=> {
        console.log("gallery");
        setData("Gallery")
    };
    const contact = ()=> {
        console.log("contact");
        setData("Contact")
    };
    return(
    <div style={{marginLeft: "40%",marginTop:"10%",textAlign :"center"}}>

      <Typography variant='h2'>Welcome to {data}</Typography>
      <br />
      <br />
      <Button variant="contained" onClick={home}>
        Home
        </Button>
        &nbsp;&nbsp;

        <Button variant="contained" onClick={gallery}>
        gallery
        </Button>
        &nbsp;&nbsp;
  
      <Button variant="contained" onClick={contact}>
        Contact
        </Button>
        &nbsp;&nbsp;
      
    </div>
  )
}

export default New
