import { useState, useContext, useEffect } from 'react';
import clsx from 'clsx';
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { guardarLS } from '../libs/guardarLS'
import { makeStyles, Avatar, CssBaseline, Drawer, AppBar, Toolbar, List } from '@material-ui/core';
import { Typography, Divider, IconButton, Badge } from '@material-ui/core/';
import { Menu, ChevronLeft, ExitToApp } from '@material-ui/icons';

import ListItemsProv from './prov/ListItemsProv'
import PerfilProv from './prov/PerfilProv'
// import ObrasDisponiblesProv from './prov/ObrasDisponiblesProv'
// import ObrasCotizadasProv from './prov/ObrasCotizadasProv'
import CotizarObraProv from './prov/CotizarObraProv'
import DetalleObraCotizadaProv from './prov/DetalleObraCotizadaProv'

import Obras from './Obras'

import { ComponenteContext } from '../context/ComponenteContext'

//import {correoJwt} from '../funciones/decodificarJwt'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#cddc39',
    color: 'black'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,

  },
  menuButtonHidden: {
    display: 'none',

  },
  title: {
    flexGrow: 1,

  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {

  const resultado = JSON.parse(localStorage.getItem('jwt'))
  const decoded = jwt_decode(resultado)
  console.log(resultado)

  const classes = useStyles();

  const { componentecontx, guardarComponenteContx } = useContext(ComponenteContext)

  const { nivel_acceso, numero_componente } = componentecontx

  //const componente_ls = JSON.parse(localStorage.getItem('componente'))  

  // const [ componente, guardarComponente ] = useState({
  //   nivel_acceso: componente_ls.nivel_acceso,
  //   numero_componente: componente_ls.numero_componente
  // })

  // const { nivel_acceso, numero_componente } = componente

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [obrasdisponibles, guardarObrasDisponibles] = useState([])
  const [obrascotizadas, guardarObrasCotizadas] = useState([])
  const [obrastotales, guardarObrasTotales] = useState([])
  const [rowsobrasdisponibles, guardarRowsObrasDisponibles] = useState([])
  const [rowsobrascotizadas, guardarRowsObrasCotizadas] = useState([])
  const [rowsobrastotales, guardarRowsObrasTotales] = useState([])
  const [actualizarcards, guardarActualizarCards] = useState(0)
  const [paginaactual, guardarPaginaActual] = useState(0)
  const [page, setPage] = useState(1);
  const [cantidadcards, guardarCantidadCards] = useState(12)
  const [paginafinal, guardarPaginaFinal] = useState(cantidadcards)
  const [tipobusqueda, guardarTipoBusqueda] = useState('Buscar por Folio Obra')
  const [perfil, guardarPerfil] = useState({})

  useEffect(() => {

    const consultarAPI = async () => {
      if (nivel_acceso === 1) {


        let AuthStr1 = 'Bearer '.concat(JSON.parse(localStorage.getItem('jwt')))

        const myHeaders = new Headers();

        myHeaders.append('Authorization', AuthStr1);
        myHeaders.append('Access-Control-Allow-Origin', '*');
        myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


        const teste = fetch('https://api-backend-spring.herokuapp.com/v2/api-docs/obra/page/1/size/1', {
          method: 'GET',
          headers: myHeaders,
        })
        console.log("esse teste", teste)

        let AuthStr = 'Bearer '.concat(JSON.parse(localStorage.getItem('jwt')))
        console.log(AuthStr)
        const URL = 'https://api-backend-spring.herokuapp.com/v2/api-docs/obra/page/1/size/1'

        axios
          .get(URL,
            {
              headers: {
                Authorization: AuthStr,
                "Access-Control-Allow-Origin": "*",

              }
            })
          .then(response => {
            // If request is good...
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        const buscarObras = axios.get('https://api-backend-spring.herokuapp.com/v2/api-docs/obra/page/1/size/1',
          {
            headers: {
              'authorization': 'Bearer ' + resultado,
              "Access-Control-Allow-Origin": "*",

            }
          })
        console.log(buscarObras)

        // const respObrasDisp = await axios.get('https://apicotizacion.herokuapp.com/api/obras/vigentes')
        // const respObrasCoti = await axios.get(`https://apicotizacion.herokuapp.com/api/cotizaciones/cotizadas/${decoded.correo}`)
        // const respPerfil = await axios.get(`https://apicotizacion.herokuapp.com/api/proveedores/datos_personales/${decoded.correo}`)
        // const obrasDisp = respObrasDisp.data.Obras.map(obra => (
        //   {
        //     folioObra: obra.folio_obra,
        //     nombreObra: obra.nombre_obra
        //   }
        // ))
        // const obrasCoti = respObrasCoti.data.Obras.map(obra => (
        //   {
        //     folioObra: obra.folio_obra,
        //     folioCotizacion: obra.folio_cotizacion,
        //     nombreObra: obra.nombre_obra,
        //   }
        // ))
        // guardarObrasDisponibles(respObrasDisp.data.Obras)
        // guardarObrasCotizadas(respObrasCoti.data.Obras)
        // guardarRowsObrasDisponibles(obrasDisp)
        // guardarRowsObrasCotizadas(obrasCoti)
        // guardarPerfil(respPerfil.data.datos_personales)
      }
    }
    consultarAPI()
    //eslint-disable-next-line
  }, [actualizarcards])

  const [obra, guardarObra] = useState({})

  const paginaUsuario = () => {
    if (nivel_acceso === 1 && numero_componente === 1) {
      return <PerfilProv
        perfil={perfil}
      />
    } else if (nivel_acceso === 1 && numero_componente === 2) {
      //return <ObrasCotizadasProv/>      
      return <Obras
        // guardarComponente={guardarComponente}
        // componente={componente}
        titulo={"Obras Cotizadas"}
        siguientecomponente={4}
        guardarObra={guardarObra}
        rows={rowsobrascotizadas}
        guardarRows={guardarRowsObrasCotizadas}
        obrastotal={obrascotizadas}
        totalpaginas={Math.ceil(rowsobrascotizadas.length / cantidadcards)}
        paginaactual={paginaactual}
        guardarPaginaActual={guardarPaginaActual}
        paginafinal={paginafinal}
        guardarPaginaFinal={guardarPaginaFinal}
        page={page}
        setPage={setPage}
        cantidadcards={cantidadcards}
        bandObrasCotizadas={true}
        tipobusqueda={tipobusqueda}
        guardarTipoBusqueda={guardarTipoBusqueda}
        seleccionpor={'obra'}
      />
    } else if (nivel_acceso === 1 && numero_componente === 3) {
      return <CotizarObraProv
        // guardarComponente={guardarComponente}
        // componente={componente}
        // passar os dados 
        obra={obra}
        guardarActualizarCards={guardarActualizarCards}
      />
    } else if (nivel_acceso === 1 && numero_componente === 4) {
      return <DetalleObraCotizadaProv
        obra={obra}
      />
    }
    else {
      return 'error 400'
    }
    /*
    switch (numerocomponentedashboardprov) {
      case 0:
        return <ObrasDisponiblesProv
          guardarNumeroComponenteDashboardProv={guardarNumeroComponenteDashboardProv}         
          guardarObra={guardarObra}
        />
      case 1:
        return <PerfilProv/>
      case 2:
        return <ObrasCotizadasProv/>
      case 3:
        return <CotizarObraProv
          guardarNumeroComponenteDashboardProv={guardarNumeroComponenteDashboardProv}          
          obra={obra}
        />
      default:
        return 'error 400'
    }
    */
  }

  const salirlogin = () => {
    //guardarLS("", "", "")
    localStorage.removeItem('jwt')
    localStorage.removeItem('componente')
    guardarComponenteContx({
      nivel_acceso: null,
      numero_ventana: 0,
      numero_componente: null
    })
    /*const objeto = {
      nivel_acceso: 0,
      numero_componente: 0,
      numero_ventana: 0
    }
    localStorage.setItem('componente', JSON.stringify(objeto))

    guardarComponenteContx({
      nivel_acceso: 0,
      numero_ventana: 0,
      numero_componente: 0
    })
    */

    //guardarNumeroComponente(0)    
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <Menu />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {
              nivel_acceso === 0 ? 'Administrador' : 'Administrador'
            }

          </Typography>
          <IconButton color="inherit">
            <Badge olor="secondary">
              <ExitToApp onClick={salirlogin} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <ListItemsProv
          guardarPaginaActual={guardarPaginaActual}
          setPage={setPage}
          obrasdisponibles={obrasdisponibles}
          guardarRowsObrasDisponibles={guardarRowsObrasDisponibles}
          obrascotizadas={obrascotizadas}
          guardarRowsObrasCotizadas={guardarRowsObrasCotizadas}
          guardarTipoBusqueda={guardarTipoBusqueda}
        />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {
          paginaUsuario()
        }
      </main>
    </div>
  );
}