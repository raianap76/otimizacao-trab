import { Fragment, useState, useEffect, useContext } from 'react';
import { makeStyles, CssBaseline, Paper, Button, Typography, Grid, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import Axios from 'axios'
import { Add } from '@material-ui/icons/'
import jwt_decode from 'jwt-decode'
import Copyright from '../Copyright'
// import TablaObraProv from './TablaObraProv'
import Error from '../Error'
import Modal from '../Modal'
import { ComponenteContext } from '../../context/ComponenteContext'


const useStyles = makeStyles((theme) => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    /*
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {    
      width: 1000,    
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    */
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  btnregistrar: {
    float: 'right'
  },
}));


const CadastrarBonus = ({ obra, guardarActualizarCards }) => {
  const classes = useStyles();

  const { componentecontx, guardarComponenteContx } = useContext(ComponenteContext)

  const handleChange = e => {


  }



  // Mensagem de erro
  // const registrar = () => {
  //     if (condiciones.trim() === '') {
  //         guardarError({ bandError: true, mensajeError: 'Todos los campos son obligadorios' })
  //         return
  //     }
  //     if (sostenimiento < 1) {
  //         guardarError({ bandError: true, mensajeError: 'Los días de sostenimiento deben ser mayor a 0' })
  //         return
  //     }
  //     guardarError({ bandError: false, mensajeError: '' })
  //     setOpenModal(true)
  // }

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Cadastro de Bonus
                    </Typography>
          <br />
          <br />
          {/* {bandError ? <Error mensaje={mensajeError} /> : null} */}
          <Fragment>

            <form
            // onSubmit={submitTabla}
            >
              <br />
              <br />
              <br />
              <br />
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="sostenimiento"
                    name="sostenimiento"
                    label="Dias"
                    // value={sostenimiento}
                    onChange={handleChange}
                    type='number'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="sostenimiento"
                    name="sostenimiento"
                    label="ID da  obra"
                    // value={sostenimiento}
                    onChange={handleChange}
                    type='number'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    required
                    id="preciounitario"
                    name="preciounitario"
                    label="Valor do bônus"
                    // value={preciounitario}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

              </Grid>
              <Grid container spacing={3}>

                <Grid item xs={12} md={12}>
                  <Button
                    type='submit'
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth
                    startIcon={<Add />}
                  >
                    Incluir
            </Button>
                </Grid>

              </Grid>

            </form>
          </Fragment >
          <br />
          <br />
          <br />
          {/* <TablaObraProv
                        rows={rows}
                        guardarRows={guardarRows}
                        guardarBandBotonRegistrar={guardarBandBotonRegistrar}
                    />
                    <br /> */}
          <Grid container justify="flex-end" spacing={3}>
            <Grid item xs={3}>
              <Button
                className={classes.btnregistrar}
                // disabled={bandbotonregistrar}
                variant="contained"
                color="primary"
                // onClick={registrar}
                dir="rtl"
              >Registrar</Button>
            </Grid>
          </Grid>
          <Modal
          // openmodal={openmodal}
          // setOpenModal={setOpenModal}
          // guardarBandDatosApi={guardarBandDatosApi}
          />
        </Paper>
        <Copyright />
      </main>
    </Fragment>
  )
}

export default CadastrarBonus;