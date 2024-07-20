import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
           
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button ><Link to={"/"}
          style={{textDecoration: "none",color:"white" }}
          >First</Link></Button>

          <Button>
          <Link
          to={"/r"}style={{textDecoration: "none",color:"white" }} 
          >Registration
          </Link>
          </Button>
          
          

          <Button >
            <Link to={"/t"}
          style={{textDecoration: "none",color:"white" }}
          >Table</Link>
          </Button>
          
          


          <Button ><Link to={"/g"}
          style={{textDecoration: "none",color:"white" }}
          >counter</Link></Button>
         

         <Button ><Link to={"/u"}
          style={{textDecoration: "none",color:"white" }}
          >New</Link></Button>

         <Button ><Link to={"/f"}
          style={{textDecoration: "none",color:"white" }}
          >FormBasic</Link></Button>
         

         <Button ><Link to={"/a"}
          style={{textDecoration: "none",color:"white" }}
          >ApiGet</Link></Button>


        </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}

export default Navbar
