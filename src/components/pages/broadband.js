import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './mobilestyles';
import BPosts from "../BPosts/BPosts"
import Form from "../Form/Form"
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getdataconsump} from "../../actions/dataconsump";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BroadbandUsageMPlans from "../BroadbandUsagePlans";
import { makeStyles } from '@material-ui/core/styles';
import BroadbandForm from '../Form/Broadbandform';


function Broadband() {

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (datas.length == 0)
      dispatch(getdataconsump());
  }, [dispatch])
  const [currentId, setCurrentId] = useState(0);

  const datas = useSelector((state) => state.datas);
  console.log(datas)
    return (
     
      <Container maxWidth="lg">
        <Grow in>
          <Container>
          <Typography>BROADBAND PLANS</Typography>
            <Grid container style={{marginTop:"20px", marginBottom:"20px"}} justify="space-between" alignItems="start" spacing={2}>
              <Grid item xs={12} sm={5}>
              <BPosts />
              </Grid>
              <Grid style={{marginLeft:"5px"}}item xs={12} sm={6}>
              <BroadbandUsageMPlans/>
              <BroadbandForm currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
  };
     
  
  export default Broadband;