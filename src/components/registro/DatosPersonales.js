import { Fragment } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { schema } from '../../libs/validarDatos'


export default function DatosPersonales({
  datos,
  guardarDatos,
  erroresdatos,
  guardarErroresDatos,
}) {


  const { email, password, nomeContato } = datos

  const { errorEmail, errorNomeContato } = erroresdatos


  const changeDatosPersonales = e => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const inputPropsCorreo = () => {
    const { error } = schema.validate({ email: email })
    if (error) {
      guardarErroresDatos({
        ...erroresdatos,
        errorEmail: true
      })
    } else {
      guardarErroresDatos({
        ...erroresdatos,
        errorEmail: false
      })
    }
  }

  const inputPropsNombreContacto = () => {
    const { error } = schema.validate({ letras: nomeContato })
    if (error) {
      guardarErroresDatos({
        ...erroresdatos,
        errorNomeContato: true
      })
    } else {
      guardarErroresDatos({
        ...erroresdatos,
        errorNomeContato: false
      })
    }
  }

  return (
    <Fragment>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <TextField
            required
            id="nomeContato"
            name="nomeContato"
            value={nomeContato}
            onChange={changeDatosPersonales}
            error={errorNomeContato}
            onKeyUp={inputPropsNombreContacto}
            label="Nome"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            value={email}
            onChange={changeDatosPersonales}
            error={errorEmail}
            onKeyUp={inputPropsCorreo}
            label="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            value={password}
            onChange={changeDatosPersonales}
            label="Password"
            type="password"
            fullWidth
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}