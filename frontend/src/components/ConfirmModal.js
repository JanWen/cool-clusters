import React, { useCallback, useState, useEffect } from 'react';
import api from '../api/clusters';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { ButtonDelete, ButtonExit } from './Button';



export default function ConfirmModal(props) {
  const [clusterData, setClusterData] = useState(props.clusterData);
  const closeDelConfirm = useCallback((e) => {
    props.setDelDialog(false);
  }, [props]);

  useEffect(() => {
    if (!clusterData.id) {
      setClusterData(props.clusterData);
    }
  }, [clusterData, props, setClusterData]);


  const deleteCluster = useCallback((e) => {
    const deleteRequest = async () => {
      await api.del(props.clusterData.id);
    };
    deleteRequest();
    props.setDelDialog(false);
  }, [props]);

  return (
    <Dialog
      className="Dialog"
      open={props.delDialog}
      onClose={() => closeDelConfirm()}
      contentLabel="Minimal Dialog Example"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle color="error" id="alert-dialog-title">
        <Typography variant="h6" fontWeight="bold" color="error">
        Are you sure you want to DELETE this cluster?
        </Typography>
      </DialogTitle>
      <DialogContent className="ClusterName" color="error">
        <Typography variant="h6" fontWeight="bold" color="primary">
          {clusterData.name}
        </Typography>
      </DialogContent>
      <div className="DialogButtons">
        <a href="/"><ButtonDelete onClick={deleteCluster}/></a>
        <ButtonExit onClick={closeDelConfirm}/>
      </div>
    </Dialog>
  );
}