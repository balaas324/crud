import './App.css';
import { Route, Switch } from 'react-router-dom'
import { AddEmployee } from './components/AddEmployee';
//import { EmployeeList } from './components/EmployeeList';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/Home';
import { EditEmployee } from './components/EditEmployee';


function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />
      </Switch>
      <footer>
        via: https://www.digitalocean.com/community/tutorials/react-crud-context-hooks
      </footer>
    </GlobalProvider>
    
  );
}

export default App;
