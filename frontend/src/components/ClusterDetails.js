import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Tooltip, Button, Typography } from '@mui/material';

export default function ClusterDetails(props) {
  const { cluster } = props;

  return (
    <Box className="ClusterDetails">
      <Tooltip title="Copy" arrow>
        <Button onClick={() => {navigator.clipboard.writeText(cluster.url);}}>
          <Typography fontSize="12px" color="primary">
            {cluster.url}
          </Typography>
          <ContentCopyIcon/>
        </Button>
      </Tooltip>
      <Typography fontWeight="100" fontSize="10px" color="primary">
        {'created: ' + cluster.created}
      </Typography>
    </Box>
  );
}
