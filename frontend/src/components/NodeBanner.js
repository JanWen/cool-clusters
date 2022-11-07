import { Box, Typography } from '@mui/material';
import React from 'react';


export default function NodeBanner(props) {
  return (
    <Box 
      sx={{
        borderColor: 'secondary.main',
        color: 'secondary.main',
        border:'1px solid',
        borderRadius:1,
      }}>
      <Typography variant="h5">
        {props.nodes}
      </Typography>
      <Typography variant="subtitle2">
      Nodes
      </Typography>
    </Box>
  );
}
