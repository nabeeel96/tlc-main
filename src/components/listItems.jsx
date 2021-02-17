import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import { Link } from 'react-router-dom';




export const mainListItems = (
  <div>
    <Link to='/'>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link to='AddNewUser'>
    <ListItem button>
      <ListItemIcon>
        <GroupAddRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Add New User" />
    </ListItem>
    </Link>
    
    </div>
);

