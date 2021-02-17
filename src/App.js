import './App.css';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NestedList from './components/SubMenu';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/Signup'>
            <Signup />
          </Route>
          <Route path='/SubMenu'>
            <NestedList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
