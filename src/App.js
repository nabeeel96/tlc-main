import './App.css';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNewUser from './components/AddNewUser';
import AddServer from './components/AddServer';
import User from './components/User';
import Test from './components/test';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/SignIn'>
            <SignIn />
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
          <Route path='/Signup'>
            <Signup />
          </Route>
          <Route path='/AddNewUser'>
            <AddNewUser />
          </Route>
          <Route path='/AddServer'>
            <AddServer />
          </Route>
          <Route path='/User'>
            <User />
          </Route>
          <Route path='/EditUser/:id'>
            <EditUser />
          </Route>
          <Route path='/ViewUser/:id'>
            <ViewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
