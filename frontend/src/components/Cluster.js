import React from 'react';
import NameField from '../components/NameField';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid} from '@mui/material';
import NodeBanner from './NodeBanner';


export default function Cluster(props) {
  const location = useLocation();
  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <NodeBanner nodes={props.cluster.nodes}/>
        </Grid>
        <Grid item>
          {
            location.pathname.includes('manage') ? (
              <NameField
                cluster={props.cluster}
                setClusterData={props.setClusterData}
              />
            ) : (
              <Typography color="primary" gutterBottom variant="h5">
                {props.cluster.name}
              </Typography>
            )
          }
        </Grid>
      </Grid>
    </Box>
  );
}


