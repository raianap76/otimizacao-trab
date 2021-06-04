import { useContext } from 'react'
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { ListAlt, Person, Add } from '@material-ui/icons';
import { ComponenteContext } from '../../context/ComponenteContext'
import { guardarLS } from '../../libs/guardarLS'

const ListItemsProv = () => {

  const { componentecontx, guardarComponenteContx } = useContext(ComponenteContext)
  const { numero_ventana } = componentecontx

  const handleClickPerfil = () => {

    guardarLS(1, numero_ventana)
    //guardarPaginaActual(0)
    //setPage(1)
    guardarComponenteContx({
      ...componentecontx,
      numero_componente: 1
    })
    //guardarTipoBusqueda('Buscar por Folio Obra')
  }

  const handleCadastroObras = () => {

    // const obras = obrasdisponibles.map(obra => (
    //   {
    //     folioObra: obra.folio_obra,
    //     nombreObra: obra.nombre_obra
    //   }
    // ))

    guardarLS(2, numero_ventana)
    //guardarPaginaActual(0)
    //setPage(1)
    guardarComponenteContx({
      ...componentecontx,
      numero_componente: 2
    })
  }
  const handleClickCadastrarBonus = () => {

    guardarLS(3, numero_ventana)
    // guardarPaginaActual(0)
    //setPage(1)
    guardarComponenteContx({
      ...componentecontx,
      numero_componente: 3
    })
  }

  const handleClickCadastrarEquipe = () => {

    guardarLS(4, numero_ventana)
    // guardarPaginaActual(0)
    //setPage(1)
    guardarComponenteContx({
      ...componentecontx,
      numero_componente: 4
    })
  }

  const handleClickVerificarMenorCusto = () => {

    guardarLS(5, numero_ventana)
    // guardarPaginaActual(0)
    //setPage(1)
    guardarComponenteContx({
      ...componentecontx,
      numero_componente: 5
    })
  }

  return (
    <List>
      <div>
        <ListItem
          button
          onClick={handleClickPerfil}
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Perfil Usuario" />
        </ListItem>
        <ListItem
          button
          onClick={handleCadastroObras}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Cadastro de Obras" />
        </ListItem>
        <ListItem
          button
          onClick={handleClickCadastrarEquipe}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Cadastrar Equipe" />
        </ListItem>
        <ListItem
          button
          onClick={handleClickCadastrarBonus}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Cadastrar Bonus" />
        </ListItem>
        <ListItem
          button
          onClick={handleClickVerificarMenorCusto}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Minimizar Custos" />
        </ListItem>

      </div>
    </List>
  )
}

export default ListItemsProv
