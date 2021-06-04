import { Fragment, useState, useEffect, useContext } from 'react';
import { makeStyles, CssBaseline, Paper, Button, Typography, Grid, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import Axios from 'axios'
import { Add } from '@material-ui/icons/'
import jwt_decode from 'jwt-decode'
import Copyright from '../Copyright'
// import TablaObraProv from './TablaObraProv'
import Error from '../Error'
import ModalCustoMinimo from '../Modal'
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


const MinimizarEquipe = ({ obra, guardarActualizarCards }) => {


  const itensList = [];
  var projetos1 = [{}]
  const arrayTeste = {
    quantidade_projeto: 3,
    custo_equipe: 1000,
    projetos: [
      {
        material: 100,
        maquinario: 100,
        teto_gasto: 100
      },
      {
        material: 101,
        maquinario: 101,
        teto_gasto: 101
      },
      {
        material: 102,
        maquinario: 102,
        teto_gasto: 102
      }
    ]
  }
  const { arrayMaterial } = {
    material: 100,
    maquinario: 100,
    teto_gasto: 100
  }

  const classes = useStyles();
  const [openmodal, setOpenModal] = useState(false);
  const [countInputs, setInputs] = useState(0);
  const [custoEquipe, setCustoEquipe] = useState(0);
  const [projetos, setProjetos] = useState([])
  const [projetos2, setProjetos2] = useState([])

  var projetos1 = [{
    material: 0,
    maquinario: 0,
    teto_gasto: 0
  }]
  const { componentecontx, guardarComponenteContx } = useContext(ComponenteContext)

  const handleChangeCustoEquipe = e => {
    const value = e.target.value
    setCustoEquipe(Number(value))
    console.log(projetos)
    //  console.log(this.state.itensList)

  }
  const handleChangeProjetos = e => {

    //var itensList = [];


    //Define o array que deve ser preenchido com os objetos


    //Define os argumentos do objeto

    const value = e.target.value
    const array = value.split(",");

    projetos1.material = Number(array[0])
    projetos1.maquinario = Number(array[1])
    projetos1.teto_gasto = Number(array[2])
    const teste3 = itensList.push(projetos1);
    console.log(teste3)

    setProjetos(itensList)
    console.log(itensList)
  }


  const handleQuantidadeProjetos = e => {
    const value = e.target.value

    console.log(Number(value))
    setInputs(Number(value))

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

  const teste = () => {
    let menuItems = [];
    for (var i = 0; i < countInputs; i++) {
      menuItems.push(
        <Grid item xs={12} md={3}>
          <TextField
            id="sostenimiento"
            name="sostenimiento"
            label="Material, Maquinario, Teto Gasto"
            // value={sostenimiento}
            onChange={handleChangeProjetos}
            fullWidth
          />

        </Grid>);
    }
    return menuItems

  }

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Verificar gasto minimo com a obra
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
                <Grid item xs={12} md={6}>
                  <TextField
                    id="sostenimiento"
                    name="sostenimiento"
                    label="Quantidade de Projetos"
                    // value={sostenimiento}
                    onChange={handleQuantidadeProjetos}
                    type='number'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="sostenimiento"
                    name="sostenimiento"
                    label="Custo da Equipe"
                    // value={sostenimiento}
                    onChange={handleChangeCustoEquipe}

                    fullWidth
                  />
                </Grid>
                {countInputs > 0 ? teste().map(item => {
                  return item
                })
                  : ''}
              </Grid>
              <Grid container spacing={3}>

                <Grid item xs={12} md={12}>
                  <Button
                    type='submit'
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth
                  >
                    Calcular o custo minimo do projeto
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
          <ModalCustoMinimo
            openmodal={openmodal}
            setOpenModal={setOpenModal}
          />
        </Paper>
        <Copyright />
      </main>
    </Fragment>
  )
}

export default MinimizarEquipe;