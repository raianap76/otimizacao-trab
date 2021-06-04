import { Fragment, useState, useEffect, useContext } from 'react';
import { IconButton, makeStyles, CssBaseline, Grid, Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import axios from 'axios'

import DatosPersonales from './DatosPersonales';
import Botones from './Botones'
import Error from '../Error'
import Copyright from '../Copyright'
import Modal from '../Modal'
import { guardarLS } from '../../libs/guardarLS'
import { ComponenteContext } from '../../context/ComponenteContext'

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginRight: 0
    },
  },
  input: {
    display: 'none',
  },
}));

export default function Checkout() {
  const classes = useStyles();

  const { guardarComponenteContx } = useContext(ComponenteContext)
  const [error, guardarError] = useState({
    bandError: false,
    mensajeError: ''
  })
  const [erroresdatos, guardarErroresDatos] = useState({
    errorEmail: false,
    errorNomeContato: false,
  })
  const [banddatosapi, guardarBandDatosApi] = useState(false)
  const [openmodal, setOpenModal] = useState(false);
  const [datos, guardarDatos] = useState({
    email: '',
    password: '',
    nomeContato: ''
  })

  // Destructuring
  const {
    errorEmail,
    errorNomeContato,
  } = erroresdatos
  const { bandError, mensajeError } = error

  const funcGuardarError = (band, mensaje) => {
    guardarError({
      bandError: band,
      mensajeError: mensaje
    })
  }

  useEffect(() => {
    const consultarAPI = async () => {
      if (banddatosapi) {
        const { email, password, nomeContato } = datos


        try {
          const teste = await axios.post('https://api-backend-spring.herokuapp.com/user/create', {
            "email": email,
            "is_admin": true,
            "name": nomeContato,
            "password": password
          })
          console.log(teste.data)

          ///guardarLS(null, null, null)

          guardarComponenteContx({
            numero_componente: null,
            numero_ventana: 0,
          })
          /*






          //guardarNumeroComponente(1)  






          */
        } catch {
          guardarBandDatosApi(false)
          alert("Erro ao cadastrar")
        }
      }
    }
    consultarAPI()
    //eslint-disable-next-line
  }, [banddatosapi])


  const handleNext = () => {

    funcGuardarError(false, '')

    setOpenModal(true)
    return
  };

  const cancel = () => {
    guardarLS(null, null, 0)
    guardarComponenteContx({
      numero_componente: null,
      numero_ventana: 0,
    })
  }

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Grid container justify="flex-end">
            <input className={classes.input} id="cancel" type="button" onClick={cancel} />
            <label htmlFor="cancel">
              <IconButton color="secondary" aria-label="cancel" component="span">
                <Cancel />
              </IconButton>
            </label>
          </Grid>
          <Typography component="h1" variant="h4" align="center">
            Registro de Pessoas
          </Typography>
          <DatosPersonales
            datos={datos}
            guardarDatos={guardarDatos}
            guardarErroresDatos={guardarErroresDatos}
            erroresdatos={erroresdatos}
          />
          <Fragment>
            <Botones

              handleNext={handleNext}
            />
            <Modal
              openmodal={openmodal}
              setOpenModal={setOpenModal}
            />
          </Fragment>
        </Paper>
        <Copyright />
      </main>
    </Fragment>
  );
}