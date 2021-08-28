import React, { useState, useEffect, useRef } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import BPost from './BPost/BPost';
import useStyles from './styles';
import broadband from '../../reducers/broadband';
import { getbroadbands } from '../../actions/broadband';

const Posts = ({setCurrentId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (broadbands.length == 0)
      dispatch(getbroadbands());
  }, [dispatch])

  const broadbands = useSelector((state) => state.broadbands);
  
  console.log(broadbands)
  const classes = useStyles();

  return  (
    broadbands.length==0 ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {broadbands.map((broadband) => (
          <Grid key={broadband._id} item xs={12} sm={6} md={6}>
            <BPost broadband={broadband}  />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
