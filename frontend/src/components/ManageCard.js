import { ButtonDelete, ButtonExit, ButtonSave } from './Button';
import ClusterDetails from './ClusterDetails';
import { Card, Box, Divider, Grid } from '@mui/material';
import NodeBanner from '../components/NodeBanner';
import NameField from '../components/NameField';
import React, { useState, useEffect, useCallback } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import api from '../api/clusters';
import './css/ManageCard.css';


function wrapper(cb) {
  async function with_cb(f, ...params) {
    cb(await f(...params));
  }
  return {
    get: (...params) => with_cb(api.get, ...params),
    del: (...params) => with_cb(api.del, ...params),
  };
}


export default function ManageCard(props) {
  const [clusterData, setClusterData] = useState({});
  const [delDialog, setDelDialog] = useState(false);
  const API = wrapper(setClusterData);

  useEffect(() => {
    if (clusterData.id === undefined) {
      API.get(props.clusterId);
    }
  }, [API, clusterData, props]);

  const openDelConfirm = useCallback((e) => {
    setDelDialog(true);
  }, []);

  const handleSave = useCallback(() => {
    const saveCluster = async () => {
      api.edit(clusterData.id, clusterData);
    };
    saveCluster();
  }, [clusterData]);


  return (
    <Card
      className="ManageCard"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <NodeBanner nodes={clusterData.nodes}/>
          </Grid>
          <Grid item>
            <NameField
              cluster={clusterData}
              setClusterData={setClusterData}
            />
          </Grid>
        </Grid>
      </Box>
      <Divider color="primary" variant="middle" />

      <ClusterDetails cluster={clusterData}/>
      <div className="ManageButtons">
        <a href="/">
          <ButtonSave onClick={handleSave}/> 
          <ButtonExit onClick={() => {}}/>
        </a>
        <ButtonDelete onClick={openDelConfirm}/>
      </div>
      <ConfirmModal 
        clusterData={clusterData}
        delDialog={delDialog}
        setDelDialog={setDelDialog}
      />
    </Card>
  );
}