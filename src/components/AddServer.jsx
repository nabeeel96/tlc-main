import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router} from 'react-router-dom';


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

export default function AddServer() {
  
  const classes = useStyles();
  const [error, setError] = useState('');
  const [sname, setSname] = useState('');
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [description, setDescription] = useState('');

 const handleSubmit = (event)=>{
   event.preventDefault()

   if(password !== cpassword){
     setError("Your password didnt match")
   }else{
     setError('')
   }


   console.log(sname)
   console.log(url)
   console.log(username)
   console.log(password)
   console.log(cpassword)
   console.log(description)
   console.log(error)
  }

  const [Department, setDepartment] = React.useState('');
  const [Role, setRole] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add New Server
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} Validate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="sname"
                name="ServerName"
                onChange={e => setSname(e.target.value)}
                variant="outlined"
                required

                fullWidth
                id="Server Name"
                label="Server Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={e => setUrl(e.target.value)}
                id="URL"
                label="Server URL"
                name="server url"
                autoComplete="sURL"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                onChange={e => setUsername(e.target.value)}
                label="Username"
                type="text"
                id="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                onChange={e => setPassword(e.target.value)}
                label="Server Password"
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
                name="password"
                onChange={e => setCpassword(e.target.value)}
                label="Confirm Password"
                type="password"
                id="current-password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField 
          id="server-dis"
          label="Server Description"
          onChange={e => setDescription(e.target.value)}
          multiline
          rows={3}
          fullWidth
          variant="outlined"
        />
        </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          > Add Server
          </Button>
          </form>
      </div>
    </Container>
  );
}