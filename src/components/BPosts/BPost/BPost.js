import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Line from "../../Line"
import { addtocart} from '../../../actions/plancart';
import useStyles from './styles';

const BPost = ({ broadband }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  


  return (
    <Card className={classes.card}>
      <div className={classes.overlay2}>
      </div>
      <div className={classes.details}>
      </div>
      <Typography className={classes.title} gutterBottom variant="h7" component="h4">Plan - {broadband.name}</Typography>
      <Typography className={classes.title} gutterBottom variant="h7" component="h4">Price - {broadband.monthlyprice}/month</Typography>
      <CardContent style={{top:"-20px"}}>
      <Line color="#3f51b5"/>
        <Typography variant="body2" color="textSecondary" component="p">Type - {broadband.plantype} GB</Typography>
        <Typography variant="body2" color="textSecondary" component="p">validity - {broadband.validity}/ Day</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Data - {broadband.data}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Upload Speed - {broadband.uploadspeed}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Speed - {broadband.speed}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">PlanPerks - {broadband.planperks.name} {broadband.planperks.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary"   > <ShoppingCartIcon fontSize="small" /> Subscribe </Button> 
      </CardActions>
    </Card>
  );
};

export default BPost;
