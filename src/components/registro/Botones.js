import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const Botones = ({ handleNext }) => {
    const classes = useStyles();
    return (
        <div className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
            >
                Cadastrar
            </Button>
        </div>
    );
}

export default Botones;