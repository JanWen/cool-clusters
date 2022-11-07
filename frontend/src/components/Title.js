import './css/Title.css';
import React from 'react';
import { Typography } from '@mui/material';


function Title() {
  return (
    <div className="Title">
      <a href="/">
        <Typography variant="h3" fontWeight="bold" color="primary">
          CoolClusters
        </Typography>
      </a>
    </div>
  );
}

export default Title;