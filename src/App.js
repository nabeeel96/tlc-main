import './App.css';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNewUser from './components/AddNewUser';

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
          <Route path='/Signup'>
            <Signup />
          </Route>
          <Route path='/AddNewUser'>
            <AddNewUser />
          </Route>
        </Switch>
        <Route path='/ok'>
          <AddNewUser />
        </Route>
      </div>
    </Router>
  );
}

export default App;
