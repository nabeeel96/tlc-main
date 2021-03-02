import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd'; 
import StorageIcon from '@material-ui/icons/Storage';

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
    <Link to='/User'>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    </Link>
    <Link to='/AddServer'>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Add Server" />
    </ListItem>
    </Link>
    <Link to='/AddNewUser'>
    <ListItem button>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add New User" />
    </ListItem>
    </Link>
    
    <Link to='/EditUser'>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="EditUser" />
    </ListItem>
    </Link>
     
    
    </div>
);