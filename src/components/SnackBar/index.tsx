import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import alertImg from '../../img/alertImg.png';

interface ICustomizedSnackbars {
  isOpen: boolean;
  onClose(): void;
}

export default function CustomizedSnackbars(props: ICustomizedSnackbars) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    props.onClose();
  };

  return (
    <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant={'filled'}
        sx={{
          width: '100%',
          '.MuiAlert-message': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            fontFamily: 'Messina Sans Mono',
          },
        }}
      >
        <img src={alertImg} alt="alert images" width={32} height={38} />
        Okay. The data looks authentic
      </Alert>
    </Snackbar>
  );
}
