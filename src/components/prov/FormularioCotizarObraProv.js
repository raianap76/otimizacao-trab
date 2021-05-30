import React, { Fragment } from 'react';
import { Button, InputLabel, Select, MenuItem, Grid, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons/'

const FormularioCotizarObraProv = ({ guardarBandBotonRegistrar, guardarRows, rows, guardarError, categorias, subcategorias, productos, datos, guardarDatos, classes }) => {

    const { folioItem, categoria, subcategoria, producto, unidad, preciounitario, requeridos, anotaciones, sostenimiento, condiciones } = datos

    const handleChange = e => {

        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const submitTabla = e => {
        e.preventDefault()

        if (producto.trim() === '' || preciounitario.trim() === '' || anotaciones.trim() === '' || unidad.trim() === '') {
            guardarError({ bandError: true, mensajeError: 'Todos los campos son obligadorios' })
            return
        }

        const result = rows.find(row => row.folioItem === folioItem)

        if (result) {
            guardarError({ bandError: true, mensajeError: 'El producto ya ha sido ingresado' })
            return
        }

        guardarError({ bandError: false, mensajeError: '' })

        guardarRows([...rows, datos])
        guardarDatos({
            ...datos,
            folioItem: '',
            categoria: '',
            subcategoria: '',
            producto: '',
            unidad: '',
            requeridos: 0,
            anotaciones: '',
            eliminar: ''
        })
        guardarBandBotonRegistrar(false)
    }
    return (
        <Fragment>

            <form
                onSubmit={submitTabla}
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
                            label="Prazo"
                            value={sostenimiento}
                            onChange={handleChange}
                            type='number'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            id="sostenimiento"
                            name="sostenimiento"
                            label="Tempo Limite"
                            value={sostenimiento}
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
                            label="Bonus Entrega"
                            value={preciounitario}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            required
                            id="preciounitario"
                            name="preciounitario"
                            label="Valor Total"
                            value={preciounitario}
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
    )
}

export default FormularioCotizarObraProv;


/**
 *
 *
 *
 */