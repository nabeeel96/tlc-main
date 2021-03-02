import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}));



export default function AddNewUser() {
  
  
  const classes = useStyles();
  let history = useHistory()
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    repassword: ""
  });
  const { name, email, password, rePassword } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/User");
  };


  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add New User
        </Typography>
          <span style={{color:'red '}}></span>
        <form className={classes.form} onSubmit={e => onSubmit(e)} Validate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={e => onInputChange(e)}
                type="text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type='email'
                id="email"
                onChange={e=>onInputChange(e)}
                label="Email Address"
                value={email}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={e=>onInputChange(e)}
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                value={rePassword}
                onChange={e=>onInputChange(e)}
                label="Confirm-Password"
                type="password"
                id="password"
                autoComplete="confirm-password"
              />
            </Grid>
            </Grid>
          <Button 
            type="submit"
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          > Add User
          </Button>
          </form>
      </div>
    </Container>
  );
}