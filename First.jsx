import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>login page</h1>
      <input placeholder='username'/>
      <br /><br />
      <input placeholder='password'/>
      <br />
      <button>login</button>
      <br />
      <br />
      <br />
      <br />

      <Typography variant='h3'>login page</Typography>
      <br /><br />
      <TextField variant="outlined" label='username'/>
      <br /><br />
      <TextField variant='filled' label='password'/>
      <br /><br />
      <TextField variant='standard' label='confirm password'/>
      <br /><br />
      <Button variant='text'>login</Button>&nbsp;&nbsp;
      <Button variant='contained' color='success'>login</Button>&nbsp;&nbsp;
      <Button variant='standard'>login</Button>
    </div>
  )
}

export default First
