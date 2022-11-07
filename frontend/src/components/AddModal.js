import React, { useCallback, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
} from '@mui/material';
import { ButtonExit, ButtonConfirm, ButtonAdd } from './Button';
import './css/AddModal.css';
import api from '../api/clusters';


export default function AddModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [nodes, setNodes] = useState('');
  const [url, setUrl] = useState('');

  const addCluster = useCallback(() => {
    setOpen(true);
  }, []);

  const handleExit = useCallback((e) => {
    setOpen(false);
  }, []);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const handleNodesChange = useCallback((e) => {
    setNodes(e.target.value);
  }, []);
  const handleUrlChange = useCallback((e) => {
    setUrl(e.target.value);
  }, []);
  const handelSave = useCallback(() => {
    const saveCluster = async () => {
      await api.add({
        name,
        nodes,
        url,
      });
    };
    saveCluster();
    setOpen(false);
  }, [name, nodes, url]);

  return (
    <div>
      <ButtonAdd onClick={addCluster}/>
      <Dialog
        open={open}
        contentLabel="Minimal Dialog Example"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle color="error" id="alert-dialog-title">
          <Typography variant="h6"color="primary">
            Add new Cluster:
          </Typography>
        </DialogTitle>
        <DialogContent className="ClusterInputs" color="error">
          <TextField
            autoFocus
            onChange={handleNameChange}
            value={name}
            label="Name"
            variant="outlined"
            type="text"
          />
          <TextField
            onChange={handleUrlChange}
            value={url}
            label="URL"
            variant="outlined"
            type="text"
          />
          <TextField
            onChange={handleNodesChange}
            value={nodes}
            label="Number of Nodes"
            variant="outlined"
            type="number"
          />
        </DialogContent>
        <div className="DialogButtons">
          <a href="/"><ButtonConfirm onClick={handelSave}/></a>
          <ButtonExit onClick={handleExit}/>
        </div>
      </Dialog>
    </div>
  );
}