import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import zIndex from '@mui/material/styles/zIndex';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface IDialogProps {
  children?: React.ReactNode;
  open: boolean;
  handleClose(): void;
  fullScreen?: boolean;
  title?: string;
  action?: boolean;
  teatDisagree?: string;
  textAgree?: string;
  agreeFun?(): void;
  zIndex?: string;
}

export default function DialogComponent({
  children,
  handleClose,
  open,
  fullScreen = false,
  title,
  action,
  agreeFun,
  teatDisagree = 'Disagree',
  textAgree = 'Agree',
  zIndex,
}: IDialogProps) {
  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      TransitionComponent={Transition}
      sx={{ zIndex: zIndex }}
    >
      {title && (
        <DialogTitle
          id="responsive-dialog-title"
          fontFamily={'inherit'}
          textTransform={'uppercase'}
          textAlign={'center'}
        >
          {title}
        </DialogTitle>
      )}
      {children}
      {action && (
        <DialogActions>
          <Button onClick={handleClose}>{teatDisagree}</Button>
          <Button onClick={agreeFun} autoFocus>
            {textAgree}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
