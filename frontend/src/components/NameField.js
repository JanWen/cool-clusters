import { TextField, Typography, Button } from '@mui/material';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';


export default function NameField(props) {
  const [clusterName, setClusterName] = useState();
  const [editable, setEditable] = useState(false);

  const handleEdit = useCallback(() => {
    setEditable(!editable);
  }, [editable]);

  const handleChange = (e) => {
    setClusterName(e.target.value);
    props.setClusterData({...props.cluster, name: e.target.value});
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditable(!editable);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEditable(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="NameField">
      <Button onClick={handleEdit} color="secondary" variant="text">
        <div className="Editable">
          {!editable ? (
            <Typography
              textTransform="none"
              className="NameFieldText"
              gutterBottom
              fontSize={20}
              color="primary"
            >
              {clusterName ? clusterName : props.cluster.name}
            </Typography>
          ) : (
            <TextField
              ref={wrapperRef}
              autoFocus
              variant="standard"
              className="NameFieldText"
              inputProps={{ style: {fontSize: 20}  }}
              value={clusterName ? clusterName : props.cluster.name}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              color="primary"
            />
          )}
        </div>
        <EditIcon color="secondary"/>
      </Button>
    </div>
  );
}