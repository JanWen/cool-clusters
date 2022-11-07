import React from 'react';
import './css/Manage.css';
import Title from '../components/Title';
import ManageCard from '../components/ManageCard';
import { useParams } from 'react-router-dom';

function Manage() {
  const { clusterId } = useParams();
  return (
    <div className="App">
      <Title className="Title" />
      <ManageCard clusterId={clusterId}/>
    </div>
  );
}

export default Manage;