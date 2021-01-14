import React, { useContext, useState, useEffect } from 'react';
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
import api from "../../api/api"
import storage from "../../firebase/index"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        width: "100px",
        height: "100px"
    }
}));

export default function DetailEmployee() {
    const classes = useStyles();
    const { user } = useContext(AuthContext)
    console.log(user)
    const [saveCV, setSaveCV] = useState(null)
    const [form, setForm] = useState({ name: "" })
    const [cv, setCV] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [src, setSrc] = useState(user.image || '/broken-image.jpg')
    const [userName, setuserName] = useState(user.name || "Your Name")
    const [alert, setAlert] = useState(null)
    const notify = () => toast.success('🦄 Update Completed', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });  ;
    const onChangesaveCV = (event) => {
        const files = event.target.files[0]
        console.log(files)
        setSaveCV(files)
    }
    const renderCV = () => {
        console.log(cv)
        if (!cv) {
            return (
                <>
                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                        Your CV
                </Typography>
                    <TextField variant="outlined" inputProps={{ multiple: true }} required fullWidth name="yourCV"
                        autoComplete="yourCV" size="small" type="file" onChange={onChangesaveCV} />
                </>
            )
        }
        if (!saveCV) {
            return (
                <>
                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                        Your CV
                    </Typography>
                    <div style={{ display: "flex", "justify-content": "space-between" }}>
                        <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                            {cv.name}
                        </Typography>
                        <TextField id="change-cv" variant="outlined" inputProps={{ multiple: true }} required fullWidth name="yourCV"
                            autoComplete="yourCV" size="small" type="file" onChange={onChangesaveCV} style={{ display: "none" }} />
                        <Button variant="contained" color="primary" size="small"
                            className={classes.button} startIcon={<SaveIcon />} onClick={() => {
                                document.getElementById('change-cv').click();
                            }}>
                            Change
                        </Button>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                        Your CV
                    </Typography>
                    <div style={{ display: "flex", "justify-content": "space-between" }}>
                        <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                            {saveCV.name}
                        </Typography>
                        <TextField id="change-cv" variant="outlined" inputProps={{ multiple: true }} required fullWidth name="yourCV"
                            autoComplete="yourCV" size="small" type="file" onChange={onChangesaveCV} style={{ display: "none" }} />
                        <Button variant="contained" color="primary" size="small"
                            className={classes.button} startIcon={<SaveIcon />} onClick={() => {
                                document.getElementById('change-cv').click();
                            }}>
                            Change
                        </Button>
                    </div>
                </>
            )
        }

    }

    const fetchCV = async () => {
        const res = await api({
            url: "/resume/owner",
            method: "GET",
        })
        console.log("CV lay ve", res)
        const cvName = res.data[res.data.length - 1];
        console.log(cvName)
        setCV(cvName)
    }

    useEffect(() => {
        if (user) {
            fetchCV();
        }
        console.log(cv)
    }, [])
    const onChangeForm = (event) => {
        const { name, value } = event.target
        console.log(event.target.value)
        setForm({
            ...form,
            [name]: value,
        })
    }

    const onChangeAvatar = (event) => {
        const avatar = event.target.files[0];
        setAvatar(avatar);
        setSrc(URL.createObjectURL(avatar))
    }

    const onChangeCV = (event) => {
        const files = event.target.files[0]
        console.log(cv)
        console.log(files)
        setCV(files)
    }

    const uploadFile = (file, typeFile) => {
        return new Promise((resovle, reject) => {
            const task = storage.child(`${typeFile}/${file.name}`).put(file)
            task.on("state_changed",
                function onProgess() { },
                function onError(err) {
                    reject(err)
                },
                function onSuccess() {
                    task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        resovle(downloadURL)
                    });
                }
            )

        })
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        console.log(avatar)
        console.log(form)
        if (avatar) {
            var imageUrl = await uploadFile(avatar, "avatar")
            console.log(imageUrl)
            const avaRes = await api({
                url: "/employee",
                method: "PATCH",
                data: { ...form, image: imageUrl }
            })
            if (avaRes.success) {
                console.log(avaRes)
                setSrc(user.image)
                notify()
                setAlert(true);
            }
        }
        else if (form) {
            const res = await api({
                url: "/employee",
                method: "PATCH",
                data: { ...form }
            })
            if (res.success) {
                setuserName(form.name || user.name)
                notify()
                setAlert(true);
            }
        }
        if (saveCV) {
            var cvUrl = await uploadFile(saveCV, "cv")
            console.log("cvUrl", cvUrl)
            const cvRes = await api({
                url: "/resume",
                method: "POST",
                data: { ower: user.email, link: cvUrl, name: saveCV.name }
            })
            console.log(cvRes)
            if (cvRes.success) {
                setCV(cvRes.data)
                setSaveCV(null)
                notify()
                setAlert(true);
            }
        }
    }

    return (

        <MainLayOut>
            <div style={{ "background-color": "#ffffff", width: "auto" }}>
                <Container component="main" maxWidth="xs" style={{ "background-color": "#ffffff" }}>
                    <CssBaseline />

                    <div className={classes.paper} >
                        <Typography component="h1" variant="h5">
                            Welcome
                         </Typography>
                        <Typography component="h2" variant="h5">
                            Manage your accout infomation
                        </Typography>


                        <Avatar src={src} className={classes.large} onClick={() => {
                            document.getElementById('outlined-size-small').click();
                        }} />

                        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
                            <TextField
                                style={{ display: 'none' }}
                                id="outlined-size-small" placeholder="Choose Your File" variant="outlined"
                                size="small" type="file" size="small" className="mb-2" onChange={onChangeAvatar} />
                            <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                                Your Name
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField autoComplete="fname" name="name" variant="outlined" required fullWidth
                                        id="firstName" label={userName} size="small" type="text" onChange={onChangeForm} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                                        Email Address
                                    </Typography>
                                    <Typography component="h5" variant="h5" style={{ "font-size": "20px" }}>
                                        {user.email}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {renderCV()}

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
                                type="submit" fullWidth variant="contained" color="primary" className={classes.submit}
                                startIcon={<CloudUploadIcon />}>
                                Save Changes
                            </Button>

                        </form>
                    </div>
                </Container>
            </div>
        </MainLayOut>
    );
}
