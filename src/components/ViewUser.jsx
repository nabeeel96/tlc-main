import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


  const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    margin: '',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ViewUser() {
    const classes = useStyles();
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };    

  
   
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        repassword: ""
      });

      const {id} = useParams()
      useEffect(()=>{
          loadUser()
      }, [])
      const loadUser = async () => {
          const res = await axios.get(`http://localhost:3003/users/${id}`)
          setUser(res.data)
      } 

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          
            <Grid item xs={12} md={6} lg={6}>
              <Paper >
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        {/* <TableRow>
            <TableCell align="Center">ID</TableCell>
            <TableCell align="Center">Name</TableCell>
            <TableCell align="Center">Email</TableCell>
            <TableCell align="Center">Created at</TableCell>
            
          </TableRow> */}
        </TableHead>
        <TableBody>
          <TableRow key={user.id}>
            <TableCell align="center">name : </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center">{user.email}</TableCell>
            </TableRow>
              <TableRow>
              <TableCell align="center">Password</TableCell>
              <TableCell align="center">{user.password}</TableCell>
            </TableRow>
              
              
          
        </TableBody>
      </Table>
    </TableContainer> 
    </Paper>
            </Grid>
           
          <Box pt={4}>
           
          </Box>
        </Container>
      </main>

    )
}


