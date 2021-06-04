import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: '2',

  },
  paper: {
    marginTop: '100px',
    maxWidth: 650,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1)

  },


  rb1: {
    background: '#3f50b5',
    borderRadius: '60px 60px 60px 60px',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center'
  },

}));

export default function DatosPersonales({ perfil }) {
  const classes = useStyles();

  let email = ""
  let nomeContato = ""
  email = localStorage.getItem('email')
  nomeContato = localStorage.getItem('name')


  return (
    <div className={classes.paper}>
      <Fragment>
        <Typography variant="h6" gutterBottom className={classes.rb1}>
          Dados Pessoais
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={true}
              id="email"
              name="email"
              label="Email"
              value={'' + email}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              disabled={true}
              id="nomeContato"
              name="nomeContato"
              label="Nome"
              value={'' + nomeContato}
              fullWidth

            />
          </Grid>
          <Grid item xs={12} sm={4}></Grid>



        </Grid>


      </Fragment>
    </div>
  );
}
