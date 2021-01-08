import React, { useContext } from 'react';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainLayOut from '../../components/LayOut/MainLayout';
import { AuthContext } from "../../App"
const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    large: {
        width: "50px",
        height: "50px"
    }
}));

export default function DetailEmployee() {
    const { user } = useContext(AuthContext)
    const classes = useStyles();
    return (
            <MainLayOut>
                <div style = {{"background-color": "#ffffff", width :"60%"}}>
                <Container component="main" maxWidth="xs" style = {{"background-color": "#ffffff"}}>
                    <CssBaseline />
                    <div className={classes.paper} >
                        <Typography component="h1" variant="h5">
                            Welcome
                     </Typography>
                        <Typography component="h2" variant="h5">
                            Manage your accout infomation
                     </Typography>
                        <Avatar src="/broken-image.jpg" className={classes.large} />
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth
                                        id="firstName" label="First Name" autoFocus />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField variant="outlined" required fullWidth
                                        id="lastName" label="Last Name" name="lastName" autoComplete="lname" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                                        Email Address
                                    </Typography>
                                    <TextField variant="outlined" required fullWidth
                                        id="email" label="Email Address" name="email" autoComplete="email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                                        Your CV
                                    </Typography>
                                    <TextField variant="outlined" required fullWidth name="yourCV"
                                        label="Your CV" autoComplete="yourCV" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                                        About You
                                    </Typography>
                                    <TextField variant="outlined" required fullWidth name="aboutyou"
                                        label="About you" autoComplete="aboutyou" />
                                </Grid>
                            </Grid>
                            <br></br>
                            <Button
                                type="submit" fullWidth variant="contained" color="secondary" className={classes.submit}>
                                Save Changes
                        </Button>
                        </form>
                    </div>
                </Container>
                </div>
            </MainLayOut>
    );
}