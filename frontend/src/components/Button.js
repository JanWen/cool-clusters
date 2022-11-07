import React from 'react';
import './css/Button.css';
import { Button } from '@mui/material';

const sx = {
  marginLeft: '1em',
  marginBottom: '1em',
};

export function ButtonAdd(props) {
  return (<Button
    className="AddButton"
    color="tertiary"
    variant="outlined"
    onClick={props.onClick}>ADD CLUSTER
  </Button>);
}

export function ButtonDelete(props) {
  return (<Button
    sx={{
      marginRight: '1em',
      marginBottom: '1em',
    }}
    className="DeleteButton"
    color="error"
    variant="outlined"
    onClick={props.onClick}>DELETE
  </Button>);
}

export function ButtonManage(props) {
  return (
    <Button
      sx={{
        width: '100%',
      }}
      className="ManageButton"
      variant="outlined"
      color="tertiary"
      onClick={props.editCluster}>
      MANAGE
    </Button>
  );
}



export function ButtonConfirm(props) {
  return (<Button
    sx={{
      float: 'right',
      marginRight: '1em',
    }}
    className="ConfirmButton"
    color="success"
    variant="outlined"
    onClick={props.onClick}>CONFIRM
  </Button>);
}

export function ButtonExit(props) {
  return (
    <Button
      sx={sx}
      className="ExitButton"
      color="neutral"
      variant="outlined"
      onClick={props.onClick}>EXIT
    </Button>
  );
}

export function ButtonSave(props) {
  return (<Button
    sx={sx}
    className="SaveButton"
    color="success"
    variant="outlined"
    onClick={props.onClick}>SAVE
  </Button>);
}
