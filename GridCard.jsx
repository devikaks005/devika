import { Card, CardContent, CardMedia, Grid, Typography,i } from '@mui/material';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

const GridCard = () => {
  <div style={{marginLeft: "4%"}}>
    <Grid container spacing={2}>

      {pro.map((val,i)=>{
        return(
          <Grid item xs={12} md={4}>
            <Card sx={{ maxwidth: 345}}>
              <CardMedia
              sx={{height: 140}}
              image={val,image}
              title="green iguana"
              />
              <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {val.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {val.price}
          </Typography>
        </CardContent>
    
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  
}
        
      )}
    );
    
    </Grid>
  </div>
  