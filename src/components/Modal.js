import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';

export default function Modal({ openmodal, setOpenModal, guardarBandDatosApi }) {

  const handleClose = () => {
    guardarBandDatosApi(false)
    setOpenModal(false);

  };

  const handleAcept = () => {
    guardarBandDatosApi(true);
    setOpenModal(false);
  };

  return (
    <div>

      <Dialog
        open={openmodal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirma cadastro?"}</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAcept} color="primary" autoFocus>
            Aceitar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}