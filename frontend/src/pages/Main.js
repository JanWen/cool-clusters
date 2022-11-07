import Title from '../components/Title';
import ClusterList from '../components/ClusterList';
import AddModal from '../components/AddModal';
import Theme from '../components/Theme';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';


function Main(props) {
  const [clusterData, _] = useState(props);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Title className="Title" />
        <AddModal
        />
        <ClusterList {...clusterData}/>
      </ThemeProvider>
    </div>
  );
}

export default Main;