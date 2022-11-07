import React, { useState, useEffect } from 'react';
import api from '../api/clusters';
import './css/ClusterList.css';
import './css/Cluster.css';
import { Card, Divider } from '@mui/material';
import ClusterDetails from './ClusterDetails';
import { ButtonManage } from './Button';
import Cluster from './Cluster';


function wrapper(cb) {
  async function with_cb(f, ...params) {
    const data = await f(...params);
    cb(state => ({...state, clusters: data}));
  }
  return {
    list: () => with_cb(api.list),
    add: (...params) => with_cb(api.add, ...params),
    edit: (...params) => with_cb(api.edit, ...params),
  };
}

function Clusters() {
  const [clusterData, setClusterData] = useState({
    clusters: undefined,
    selected: undefined,
  });
  const API = wrapper(setClusterData);

  useEffect(() => {
    if (clusterData.clusters === undefined) {
      API.list();
    }
  }, [API, clusterData]);

  return (
    <div>
      <div className="ClusterList">
        {
          clusterData.clusters ? (
            clusterData.clusters.map((cluster, key) => {
              const clusterProps = {...cluster, key: key};
              return (
                <Card 
                  key={key} 
                  className="ClusterCard"
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Cluster cluster={cluster} />
                  <Divider color="primary" variant="middle" />
          
                  <ClusterDetails cluster={clusterProps}/>
                  <a href={'manage/' + cluster.id}>
                    <ButtonManage />
                  </a>
                </Card>
              );
            })
          ) : (
            undefined
          )}
      </div>
    </div>
  );
}

export default Clusters;