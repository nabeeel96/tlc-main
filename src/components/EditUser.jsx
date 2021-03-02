// import React ,{useState,useEffect} from 'react';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import axios from 'axios';
// import {useParams} from 'react-router-dom'




// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));



// export default function EditUser({filteredData}) {
//   const updateId = useParams()
// //   console.log(updateId.id)
// const getId = updateId.id
// console.log(getId)
//   const [Fname,setFname] = useState('');
//   const [Lname,setLname] = useState('');
//   const [Email,setEmail] = useState('');
//   const [Password,setPassword] = useState('');
//   const [rePassword,setRepassword] = useState('');
//   const [err,setErr] = useState('');
  
//   const classes = useStyles();
//   useEffect(()=>{
//     loadUser()
//   },[])
//   const loadUser = async (id)=>{
//     const result = await axios.get('http://10.89.189.102/demoAPI/public/api/users/' + id)
    
//       console.log(result)
//   }

//   useEffect(()=>{
//     axios.get('http://10.89.189.102/demoAPI/public/api/users/48').then(res=>{
//         console.log(res)
//     }).catch(error=>{
//         console.log('something went wrong')
//     })
//   });
  
//   const handleSubmit = (event) =>{
//     event.preventDefault()
    
//     const data = {
//       name : Fname + ' ' +Lname,
//       email : Email,
//       password: Password
//     }
    
//     if (rePassword !== Password) {
//       setErr('your Password didnt match')
//     }else{
//       setErr('')
//     }

//     console.log(data)
//     const url = 'http://10.89.189.102/demoAPI/public/api/users'
    
//     axios.post(url,data).then(res=>{
//       console.log(res.data)
//     }).then(error=>{
//       console.log(error)
//     })

//   }

//   return (
//       <Container component="main" maxWidth="sm">
//       {/* <h1>{prop}</h1> */}
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Typography component="h1" variant="h5">
//           Edit User
//         </Typography>
//           <span style={{color:'red '}}>{err}</span>
//         <form className={classes.form} onSubmit={handleSubmit} Validate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 onChange={e=>setFname(e.target.value)}
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={e=>setLname(e.target.value)}
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 type='email'
//                 id="email"
//                 onChange={e=>setEmail(e.target.value)}
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           > Update User
//           </Button>
//           </form>
//       </div>
//     </Container>
//   );
// }

import React ,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom'


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



export default function EditUser() {
  
  
  const classes = useStyles();
  const {id} = useParams()
  let history = useHistory()
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    repassword: ""
  });
  const { firstname, lName, email, password, rePassword } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  useEffect(()=>{
    loadUser()
  },[])
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/User");
  };

  const loadUser = async () =>{
    const result = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(result.data)
  }


  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit User
        </Typography>
          <span style={{color:'red '}}></span>
        <form className={classes.form} onSubmit={e => onSubmit(e)} Validate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                value={firstname}
                name = "firstname"
                variant="outlined"
                placeholder="enter your name"
                onChange={e=>onInputChange(e)}
                required
                fullWidth
               
                autoFocus
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
                name="Confirm-Password"
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
          > Update User
          </Button>
          </form>
      </div>
    </Container>
  );
}