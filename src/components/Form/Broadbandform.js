import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createBroadbandPlan } from "../../actions/broadband"
import { Container } from '@material-ui/core';
import { Grow} from '@material-ui/core';

    const BroadbandForm = ({currentId, setCurrentId}) => {
      const [bpostData, setBPostData] = useState({ name:"", monthlyprice:"", plantype:"", validity:"", data:"", uploadspeed:"", downloadspeed:"", speed:"",  installationcharges:""});
      const bpost = useSelector((state) => (currentId ? state.broadbands.find((message) => message._id === currentId) : null));
      const dispatch = useDispatch();
      const classes = useStyles();
    
      useEffect(() => {
        if (bpost) setBPostData(bpost);
      }, [bpost]);
    
      const clear = () => {
        setCurrentId(0);
        setBPostData({name:"", monthlyprice:"", plantype:"", validity:"", data:"", uploadspeed:"", downloadspeed:"", speed:"",  installationcharges:""});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
          dispatch(createBroadbandPlan(bpostData));
          clear();
        } else {
          clear();
        }
      };
      return (
        <Container maxWidth="lg">
        <Grow in>
          <Container>
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Broadband plan</Typography>
            <TextField  size="small" name="name" variant="outlined" label="Name" fullWidth value={bpostData.name} onChange={(e) => setBPostData({ ...bpostData, name: e.target.value })} />
            <TextField  size="small" name="monthlyprice" variant="outlined" label="Monthly Price" fullWidth value={bpostData.monthlyprice} onChange={(e) => setBPostData({ ...bpostData, monthlyprice: e.target.value })} />
            <TextField  size="small" name="plantype" variant="outlined" label="Plan Type" fullWidth  value={bpostData.plantype} onChange={(e) => setBPostData({ ...bpostData, plantype: e.target.value })} />
            <TextField  size="small" name="validity" variant="outlined" label="Validity" fullWidth value={bpostData.validity} onChange={(e) => setBPostData({ ...bpostData, validity: e.target.value })} />
            <TextField  size="small" name="data" variant="outlined" label="Data" fullWidth value={bpostData.data} onChange={(e) => setBPostData({ ...bpostData, data: e.target.value })} />
            <TextField  size="small" name="uploadspeed" variant="outlined" label="Upload Speed" fullWidth value={bpostData.uploadspeed} onChange={(e) => setBPostData({ ...bpostData, uploadspeed: e.target.value })} />
            <TextField  size="small" name="downloadspeed" variant="outlined" label="Download Speed" fullWidth value={bpostData.downloadspeed} onChange={(e) => setBPostData({ ...bpostData, downloadspeed: e.target.value })} />
            <TextField  size="small" name="speed" variant="outlined" label="Speed" fullWidth value={bpostData.speed} onChange={(e) => setBPostData({ ...bpostData, speed: e.target.value })} />
            <TextField  size="small" name="installationcharges" variant="outlined" label="Installation Charges" fullWidth value={bpostData.installationcharges} onChange={(e) => setBPostData({ ...bpostData, installationcharges: e.target.value })} />
            <Button  size="small" className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button  size="small" variant="contained" color="primary" size="small" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
        </Container>
</Grow>
</Container>
      );
    };
    
    export default BroadbandForm;


